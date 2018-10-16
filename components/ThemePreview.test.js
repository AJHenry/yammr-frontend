import React from 'react';
import ThemePreview from './ThemePreview';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<ThemePreview />).toJSON();
  expect(rendered).toBeTruthy();
});
