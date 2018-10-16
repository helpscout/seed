const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");
const _ = require("lodash");
const pathfinder = require("sass-pathfinder");
const sass = require("node-sass");
const projectPkg = require("../package.json");

const PKG_PATH = "packages/*/package.json";
const shouldWrite = process.argv.includes("--write");

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const buildPackages = (pkgPath = PKG_PATH) => {
  return glob(pkgPath, (err, files) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    files.forEach(buildPackage);
  });
};

const getOnlyPackName = string => string.replace("@seedcss/", "");
const getPkgFromFile = file => JSON.parse(fs.readFileSync(file));
const getPackNameFromFile = file => path.basename(path.dirname(file));
const getPathFromFile = file => {
  const baseDirName = getPackNameFromFile(file);
  return path.resolve(__dirname, "../packages", baseDirName);
};
const getSassIndexPathFromFile = file => {
  const pkgDirPath = getPathFromFile(file);
  const packName = getPackNameFromFile(file);

  return path.resolve(pkgDirPath, "scss/pack", packName, "__index.scss");
};
const getSassDestPathFromFile = file => {
  const pkgDirPath = getPathFromFile(file);
  const packName = getPackNameFromFile(file);

  return path.resolve(pkgDirPath, "dist", `${packName}.css`);
};

const buildPackage = file => {
  // Get the package.json
  const pkg = getPkgFromFile(file);
  const pkgName = pkg.name;

  // Let em know!
  console.log(`Building ${pkgName}...`);
  compileSass(file);
};

const getSassDependenciesFromPkg = pkg => {
  if (!pkg.dependencies) return [];

  return Object.keys(pkg.dependencies)
    .filter(dep => dep.indexOf("@seedcss") >= 0)
    .map(pack => {
      const packName = getOnlyPackName(pack);
      const packIncludePath = require(path.resolve(
        __dirname,
        "../packages",
        packName
      ));

      return packIncludePath;
    });
};

const composeWithBanner = file => {
  const pkg = getPkgFromFile(file);
  const banner = `
/**
 * ${pkg.name} (https://github.com/helpscout/seed/)
 * ${pkg.description}
 * Licensed under MIT
 */
`;
  return css => (banner + css).trim();
};

const compileSass = file => {
  const pkg = getPkgFromFile(file);
  const pkgName = pkg.name;
  const deps = getSassDependenciesFromPkg(pkg);
  const includePaths = pathfinder(deps);
  const entryFile = getSassIndexPathFromFile(file);
  const outputFile = getSassDestPathFromFile(file);
  const outputFileMin = outputFile.replace(".css", ".min.css");
  const withBanner = composeWithBanner(file);

  const sassOptions = {
    file: entryFile,
    includePaths
  };
  const minSassOptions = Object.assign({}, sassOptions, {
    outputStyle: "compressed"
  });

  sass.render(sassOptions, (error, result) => {
    if (error) {
      console.error(error);
      return process.exit(1);
    } else {
      const fileContent = withBanner(result.css);

      if (shouldWrite) {
        fs.writeFile(outputFile, fileContent, function(err) {
          if (!err) {
            return console.log(outputFile + ".css created.");
          }
        });
      } else {
        console.log(pkgName + " compiled.");
      }
    }
  });

  if (shouldWrite) {
    sass.render(minSassOptions, (error, result) => {
      if (error) {
        console.error(error);
        return process.exit(1);
      } else {
        const fileContent = withBanner(result.css);

        fs.writeFile(outputFileMin, fileContent, function(err) {
          if (!err) {
            return console.log(outputFileMin + ".css created.");
          }
        });
      }
    });
  }
};

// Build all the packages!
buildPackages();
