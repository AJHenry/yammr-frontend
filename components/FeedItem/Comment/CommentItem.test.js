import React from 'react';
import { CommentItem } from './CommentItem';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<CommentItem />).toJSON();
  expect(rendered).toBeTruthy();
});
