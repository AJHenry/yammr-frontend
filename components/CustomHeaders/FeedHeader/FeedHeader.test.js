import React from 'react';
import { FeedHeader } from './FeedHeader';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<FeedHeader />).toJSON();
  expect(rendered).toBeTruthy();
});
