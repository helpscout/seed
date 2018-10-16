import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { version } from "../lerna.json";
import "./scss/base.scss";
import "../packages/seed-reset/scss/pack/seed-reset/__index.scss";
import "../packages/seed-base/scss/pack/seed-base/__index.scss";
import "../packages/seed-spacing/scss/pack/seed-spacing/__index.scss";

setOptions({
  name: `Seed v${version}`,
  url: "https://github.com/helpscout/seed/",
  showDownPanel: false
});

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
