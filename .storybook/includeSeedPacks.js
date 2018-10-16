const fs = require('fs-extra')
const { lstatSync, readdirSync } = require('fs')
const path = require('path')
const packagesPath = path.resolve(__dirname, '../packages')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => path.join(source, name)).filter(isDirectory)

const getPkgFromFile = file => JSON.parse(fs.readFileSync(file));
const getPkgFromPackage = pkg => {
  const name = pkg.replace('@seedcss/', '')
  const filepath = path.resolve(__dirname, '../packages', name, 'package.json')

  return getPkgFromFile(filepath)
}

const seedPackList = getDirectories(packagesPath)

const dependencySet = {}

const addDependencyToSet = dep => {
  if (dependencySet[dep]) return false
  const pkg = getPkgFromPackage(dep)
  const pkgDeps = pkg.dependencies

  if (pkgDeps) (
    Object.keys(pkgDeps).forEach(addDependencyToSet)
  )

  dependencySet[dep] = true
  return true
}

const addDependenciesToSet = pkg => {
  const deps = pkg.dependencies
  const name = pkg.name
  if (!deps) return false

  Object.keys(deps).forEach(addDependencyToSet)

  if (!dependencySet[name]) {
    dependencySet[name] = true
  }

  return true
}

const includeSeedPacks = () => {
  seedPackList.forEach(pack => {
    const pkgPath = path.resolve(pack, 'package.json')
    const pkg = getPkgFromFile(pkgPath)

    addDependenciesToSet(pkg)
  })

  const seedPacks = Object.keys(dependencySet)
    .map(pack => pack.replace('@seedcss/', ''))
    .map(pack => path.resolve(__dirname, '../packages', pack, 'scss'))

  return seedPacks
}

module.exports = includeSeedPacks

