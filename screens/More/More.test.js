import React from 'react';
import More from './More';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<More />).toJSON();
  expect(rendered).toBeTruthy();
});
