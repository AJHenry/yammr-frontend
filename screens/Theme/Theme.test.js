import React from 'react';
import Theme from './Theme';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Theme />).toJSON();
  expect(rendered).toBeTruthy();
});
