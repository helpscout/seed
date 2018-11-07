import React from "react";
import { storiesOf } from "@storybook/react";
import "../packages/seed-alert/scss/pack/seed-alert/__index.scss";

const stories = storiesOf("seed-alert", module);

stories.add("States", () => (
  <div>
    <div class="c-alert is-error" role="alert">
      <h3 id="you-are-a-toyyy-2">You, Are, A, Toyyy!</h3>
      <p>
        You're not the real thing. You're an action figure. You are a child's
        play thing!
      </p>
    </div>
    <div class="c-alert is-info" role="alert">
      <h3 id="buzz">Buzz?</h3>
      <p>Buzz Lightyear, you're not worried are you?</p>
    </div>
    <div class="c-alert is-success" role="alert">
      <h3 id="success">Success!</h3>
      <p>That's not flying, that's just falling with style ;)</p>
    </div>
    <div class="c-alert is-warning" role="alert">
      <h3 id="just-a-heads-up">Just a heads up</h3>
      <p>
        You my friend are responsible for delaying my rendezvous with star
        command!
      </p>
    </div>
  </div>
));
