import React from 'react';
import Register from './Register';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Register />).toJSON();
  expect(rendered).toBeTruthy();
});
