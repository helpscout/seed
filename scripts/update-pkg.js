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

    // (Re)write it
    fs.writeFileSync(file, JSON.stringify(nextPkg, null, 2));
  })
})
