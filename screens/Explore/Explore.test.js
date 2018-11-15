import React from 'react';
import Explore from './Explore';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Explore />).toJSON();
  expect(rendered).toBeTruthy();
});
