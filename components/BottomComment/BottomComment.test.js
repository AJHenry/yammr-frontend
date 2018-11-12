import React from 'react';
import { BottomComment } from './BottomComment';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<BottomComment />).toJSON();
  expect(rendered).toBeTruthy();
});
