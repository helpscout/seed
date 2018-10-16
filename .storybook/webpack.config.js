const path = require("path");
const pathfinder = require('sass-pathfinder')
const includeSeedPacks = require('./includeSeedPacks')

const packagesPath = path.resolve(__dirname, '../packages')

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    include: packagesPath,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
        options: {
          includePaths: pathfinder(
            includeSeedPacks()
          )
        },
      },
    ],
  });

  return storybookBaseConfig;
};