import React from 'react';
import { PostCreateHeader } from './PostCreateHeader';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<PostCreateHeader />).toJSON();
  expect(rendered).toBeTruthy();
});
