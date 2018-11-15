import React from 'react';
import { FeedList } from './FeedList';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const data = [];

  const rendered = renderer.create(<FeedList data={data} />).toJSON();
  expect(rendered).toBeTruthy();
});
