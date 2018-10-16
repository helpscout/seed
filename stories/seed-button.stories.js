import React from "react";
import { storiesOf } from "@storybook/react";
import "../packages/seed-button/scss/pack/seed-button/__index.scss";
import "../packages/seed-control-group/scss/pack/seed-control-group/__index.scss";

const stories = storiesOf("seed-button", module);

stories.add("Types", () => (
  <div>
    <button class="c-button">Regular</button>
    <button class="c-button c-button--primary">Primary</button>
    <button class="c-button c-button--link">Link</button>
  </div>
));

stories.add("Sizes", () => (
  <div>
    <div class="u-pad-5">
      <h3>Large</h3>
      <button class="c-button c-button--lg">Regular</button>
      <button class="c-button c-button--primary c-button--lg">Primary</button>
      <button class="c-button c-button--link c-button--lg">Link</button>
    </div>

    <div class="u-pad-5">
      <h3>Medium</h3>
      <button class="c-button c-button--md">Regular</button>
      <button class="c-button c-button--primary c-button--md">Primary</button>
      <button class="c-button c-button--link c-button--md">Link</button>
    </div>

    <div class="u-pad-5">
      <h3>Small</h3>
      <button class="c-button c-button--sm">Regular</button>
      <button class="c-button c-button--primary c-button--sm">Primary</button>
      <button class="c-button c-button--link c-button--sm">Link</button>
    </div>
  </div>
));

stories.add("States", () => (
  <div>
    <button class="c-button is-success">Success</button>
    <button class="c-button is-error">Error</button>
    <button class="c-button is-warning">Warning</button>
  </div>
));

stories.add("Disabled", () => (
  <div>
    <button class="c-button" disabled>
      Regular
    </button>
    <button class="c-button c-button--primary" disabled>
      Primary
    </button>
    <button class="c-button c-button--link" disabled>
      Link
    </button>
  </div>
));

stories.add("Button groups", () => (
  <div>
    <div class="o-control-group" role="group">
      <button class="c-button c-button--sm">Button</button>
      <button class="c-button c-button--sm">Button</button>
      <button class="c-button c-button--sm">Button</button>
    </div>
  </div>
));
