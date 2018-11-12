import React from 'react';
import { LargeInput } from './LargeInput';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<LargeInput />).toJSON();
  expect(rendered).toBeTruthy();
});
