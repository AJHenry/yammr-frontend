import React from 'react';
import { TextItem } from './TextItem';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<TextItem />).toJSON();
  expect(rendered).toBeTruthy();
});
