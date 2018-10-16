import { configure } from '@storybook/react';
import '../packages/seed-base/scss/pack/seed-base/__index.scss'
import '../packages/seed-reset/scss/pack/seed-reset/__index.scss'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
