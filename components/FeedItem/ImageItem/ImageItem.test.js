import React from 'react';
import { ImageItem } from './ImageItem';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<ImageItem />).toJSON();
  expect(rendered).toBeTruthy();
});
