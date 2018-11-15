import React from 'react';
import Account from './Account';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Account />).toJSON();
  expect(rendered).toBeTruthy();
});
