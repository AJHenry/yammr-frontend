import React from 'react';
import { GenericHeader } from './GenericHeader';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<GenericHeader />).toJSON();
  expect(rendered).toBeTruthy();
});
