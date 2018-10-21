import React from 'react';
import Authentication from './Authentication';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Authentication />).toJSON();
  expect(rendered).toBeTruthy();
});
