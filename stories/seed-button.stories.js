import React from 'react';
import { storiesOf } from '@storybook/react';
import '../packages/seed-base/scss/pack/seed-base/__index.scss'
import '../packages/seed-button/scss/pack/seed-button/__index.scss'

const stories = storiesOf('seed-button', module)

stories.add('default', () => (
  <div>
    <button className="c-button">Button</button>
  </div>
))
