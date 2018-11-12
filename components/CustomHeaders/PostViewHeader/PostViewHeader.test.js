import React from 'react';
import { PostViewHeader } from './PostViewHeader';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<PostViewHeader />).toJSON();
  expect(rendered).toBeTruthy();
});
