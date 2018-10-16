const path = require("path");
const pathfinder = require("sass-pathfinder");
const includeSeedPacks = require("./includeSeedPacks");

const storybookPath = path.resolve(__dirname, "../.storybook");
const storiesPath = path.resolve(__dirname, "../stories");
const packagesPath = path.resolve(__dirname, "../packages");

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.(css|scss)$/,
    include: [storybookPath, storiesPath, packagesPath],
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader"
      },
      {
        loader: "sass-loader",
        options: {
          includePaths: pathfinder(includeSeedPacks(), storiesPath)
        }
      }
    ]
  });

  return storybookBaseConfig;
};
