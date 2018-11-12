import React from 'react';
import { FeedItem } from './FeedItem';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<FeedItem />).toJSON();
  expect(rendered).toBeTruthy();
});
