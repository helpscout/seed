const fs = require("fs");
const path = require("path");
const glob = require("glob");
const _ = require("lodash");

const PKG_PATH = "packages/*/package.json";
const README_TEMPLATE = fs.readFileSync(
  path.resolve(__dirname, "../templates/README.md"),
  "utf8"
);

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const updatePackages = (pkgPath = PKG_PATH) => {
  return glob(pkgPath, (err, files) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    files.forEach(updatePackage);
  });
};

const getPkgFromFile = file => JSON.parse(fs.readFileSync(file));

const updatePackage = file => {
  // Get the package.json
  const pkg = getPkgFromFile(file);
  const pkgName = pkg.name;

  // Let em know!
  console.log(`Updating ${pkgName}`);

  const nextPkg = compose(
    updatePackageDetails,
    updateSeedPackageDependencies,
    updateSeedToolDependencies,
  )(pkg);

  updateReadme(file);

  // (Re)write it
  fs.writeFileSync(file, JSON.stringify(nextPkg, null, 2));
};

const updatePackageDetails = pkg => {
  const nextPkg = Object.assign({}, pkg, {
    publishConfig: {
      access: "public"
    },
    prepack: "npm run build",
    homepage: "https://github.com/helpscout/seed/",
    repository: {
      type: "git",
      url: "git+https://github.com/helpscout/seed.git"
    },
    bugs: {
      url: "https://github.com/helpscout/seed/issues"
    }
  });

  // Clean

  if (nextPkg.engines) {
    delete nextPkg.engines;
  }
  if (nextPkg.prepack) {
    delete nextPkg.prepack;
  }
  if (nextPkg.postversion) {
    delete nextPkg.postversion;
  }

  return nextPkg;
};

const updateSeedPackageDependencies = pkg => {
  const nextPkg = Object.assign({}, pkg);
  const deps = nextPkg.dependencies;

  if (deps) {
    Object.keys(deps).forEach(key => {
      if (key.indexOf("seed-") === 0) {
        // Rename the dependency
        deps[`@seedcss/${key}`] = `^${pkg.version}`;
        // Remove the old one
        delete deps[key];
      }
      if (key.indexOf("@seedcss/seed-") === 0) {
        // Update the dependency version
        deps[key] = `^${pkg.version}`;
      }

      if (key === "sass-pathfinder") {
        delete deps[key];
      }
    });
  }

  return nextPkg;
};

const updateSeedToolDependencies = pkg => {
  const nextPkg = Object.assign({}, pkg);
  const deps = nextPkg.devDependencies;

  if (deps) {
    Object.keys(deps).forEach(key => {
      if (key === "seed-barista") {
        deps[key] = "^1.1.0";
      }
      if (key === "seed-bistro") {
        deps[key] = "^0.2.0";
      }
      if (key === "mkdirp") {
        deps[key] = "^0.5.1";
      }
      if (key === "nodemon") {
        deps[key] = "^1.18.4";
      }
      if (key === "node-sass") {
        deps[key] = "^4.9.3";
      }
      if (key === "hoek") {
        delete deps[key];
      }
      deps["sass-pathfinder"] = "^0.0.5"
    });
  }

  return nextPkg;
};

const updateReadme = file => {
  const dirname = path.dirname(file);
  const pkg = getPkgFromFile(file);
  const packConfig = getPackConfig(file);
  const writePath = path.join(dirname, "README.MD");

  const props = {
    name: pkg.name.replace("@seedcss/", ""),
    description: pkg.description,
    package: pkg.name,
    config: packConfig || false
  };

  const doc = _.template(README_TEMPLATE.trim())(props).trim();

  fs.writeFileSync(writePath, doc);
};

const getPackConfig = file => {
  const dirname = path.dirname(file);
  const pkg = getPkgFromFile(file);

  const packName = pkg.name.replace("@seedcss/", "");
  const configPath = path.join(
    dirname,
    "/scss/pack/",
    packName,
    "_config.scss"
  );

  if (fs.existsSync(configPath)) {
    return fs.readFileSync(path.resolve(configPath), "utf8");
  } else {
    return undefined;
  }
};

// Update all the packages!
updatePackages();
