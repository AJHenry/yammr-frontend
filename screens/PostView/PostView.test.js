import React from 'react';
import PostView from './PostView';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const navigation = {
    getParam: jest.fn(() => {
      return {};
    }),
  };

  const rendered = renderer
    .create(<PostView navigation={navigation} />)
    .toJSON();
  expect(rendered).toBeTruthy();
});
