const fs = require('fs')
const glob = require("glob")

glob("packages/*/package.json", (err, files) => {
  files.forEach(file => {
    // Get the package.json
    const pkg = JSON.parse(fs.readFileSync(file))

    // Update it
    const nextPkg = Object.assign({}, pkg, {
      publishConfig: {
        access: "public"
      },
      prepublish: "npm run build"
    })

    // (Re)write it
    fs.writeFileSync(file, JSON.stringify(nextPkg, null, 2));
  })
})