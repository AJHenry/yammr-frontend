import React from 'react';
import { Vote } from './Vote';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Vote />).toJSON();
  expect(rendered).toBeTruthy();
});
