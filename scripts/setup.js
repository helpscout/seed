const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");
const _ = require("lodash");
const projectPkg = require("../package.json");

const PKG_PATH = "packages/*/package.json";
const PATHFINDER_FILE = fs.readFileSync(
  path.resolve(__dirname, "../templates/scripts/pathfinder.js"),
  "utf8"
);
const NPM_RC_FILE = fs.readFileSync(
  path.resolve(__dirname, "../templates/.npmrc"),
  "utf8"
);
const LICENCE_FILE = fs.readFileSync(
  path.resolve(__dirname, "../templates/LICENCE.md"),
  "utf8"
);

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const getPkgFromFile = file => JSON.parse(fs.readFileSync(file));
const getPackNameFromFile = file => path.basename(path.dirname(file));
const getPathFromFile = file => {
  const baseDirName = getPackNameFromFile(file);
  return path.resolve(__dirname, "../packages", baseDirName);
};

const setupPackages = (pkgPath = PKG_PATH) => {
  return glob(pkgPath, (err, files) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    files.forEach(setupPackage);
  });
};

const setupPackage = file => {
  // Get the package.json
  const pkg = getPkgFromFile(file);
  const pkgName = pkg.name;

  // Let em know!
  console.log(`Setting up ${pkgName}...`);

  addPathFinderToPkg(file);
  addNpmFilesToPkg(file);
};

const addPathFinderToPkg = file => {
  const pkgDirPath = getPathFromFile(file);
  const pathFinderFilePath = path.resolve(
    pkgDirPath,
    "scripts",
    "pathfinder.js"
  );

  fs.writeFile(pathFinderFilePath, PATHFINDER_FILE);
};

const addNpmFilesToPkg = file => {
  const pkgDirPath = getPathFromFile(file);

  fs.writeFile(path.resolve(pkgDirPath, ".npmrc"), NPM_RC_FILE);
  fs.writeFile(path.resolve(pkgDirPath, "LICENCE.md"), LICENCE_FILE);
};

setupPackages();
