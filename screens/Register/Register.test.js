import React from 'react';
import Registration from './Registration';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Registration />).toJSON();
  expect(rendered).toBeTruthy();
});
