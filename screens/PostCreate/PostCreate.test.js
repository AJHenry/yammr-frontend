import React from 'react';
import PostCreate from './PostCreate';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const navigation = {
    goBack: jest.fn(),
  };
  const rendered = renderer
    .create(<PostCreate navigation={navigation} />)
    .toJSON();
  expect(rendered).toBeTruthy();
});
