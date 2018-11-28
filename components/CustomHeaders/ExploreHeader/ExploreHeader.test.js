import React from 'react';
import { ExploreHeader } from './ExploreHeader';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<ExploreHeader />).toJSON();
  expect(rendered).toBeTruthy();
});
