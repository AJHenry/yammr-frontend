import React from 'react';
import PostView from './PostView';
import { Provider } from 'mobx-react';
import renderer from 'react-test-renderer';
import PostStore from '../../mobx/postStore';
import userService from '../../services/user.service';

it('renders without crashing', () => {
  const navigation = {
    getParam: jest.fn(() => {
      return {};
    }),
  };

  const postStore = new PostStore(userService);
  const rendered = renderer
    .create(
      <Provider postStore={postStore}>
        <PostView navigation={navigation} />
      </Provider>
    )
    .toJSON();
  expect(rendered).toBeTruthy();
});
