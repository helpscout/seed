const fs = require('fs')
const glob = require("glob")

glob("packages/*/package.json", (err, files) => {
  files.forEach(file => {
    const pkg = JSON.parse(fs.readFileSync(file))
    console.log(pkg)
  })
})