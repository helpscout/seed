const fs = require('fs')
const glob = require("glob")

const PKG_PATH = 'packages/*/package.json'

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

const updatePackages = (pkgPath = PKG_PATH) => {
  return glob("packages/*/package.json", (err, files) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    files.forEach(updatePackage)
  })
}

const updatePackage = (file) => {
  // Get the package.json
  const pkg = JSON.parse(fs.readFileSync(file))
  const pkgName = pkg.name

  // Let em know!
  console.log(`Updating ${pkgName}`)

  const nextPkg = compose(
    updatePackageDetails,
    updateSeedPackageDependencies,
    updateSeedToolDependencies
  )(pkg)

  // (Re)write it
  fs.writeFileSync(file, JSON.stringify(nextPkg, null, 2));
}

const updatePackageDetails = (pkg) => {
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
    },
  })

  if (nextPkg.engine) {
    delete nextPkg.engine
  }

  return nextPkg
}

const updateSeedPackageDependencies = (pkg) => {
  const nextPkg = Object.assign({}, pkg)
  const deps = nextPkg.dependencies

  if (deps) {
    Object.keys(deps).forEach((key) => {
      if (key.indexOf('seed-') === 0) {
        // Rename the dependency
        deps[`@seedcss/${key}`] = `^${pkg.version}`
        // Remove the old one
        delete deps[key]
      }
      if (key.indexOf('@seedcss/seed-') === 0) {
        // Update the dependency version
        deps[key] = `^${pkg.version}`
      }
    })
  }

  return nextPkg
}

const updateSeedToolDependencies = (pkg) => {
  const nextPkg = Object.assign({}, pkg)
  const deps = nextPkg.devDependencies

  if (deps) {
    Object.keys(deps).forEach(key => {
      if (key === 'seed-barista') {
        deps[key] = '^1.1.0'
      }
      if (key === 'seed-bistro') {
        deps[key] = '^0.2.0'
      }
      if (key === 'mkdirp') {
        deps[key] = '^0.5.1'
      }
      if (key === 'nodemon') {
        deps[key] = '^1.18.4'
      }
      if (key === 'node-sass') {
        deps[key] = '^4.9.3'
      }
      if (key === 'hoek') {
        delete deps[key]
      }
    })
  }

  return nextPkg
}

// Update all the packages!
updatePackages()