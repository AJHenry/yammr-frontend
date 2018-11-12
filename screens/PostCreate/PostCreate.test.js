import React from 'react';
import PostCreate from './PostCreate';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<PostCreate />).toJSON();
  expect(rendered).toBeTruthy();
});
