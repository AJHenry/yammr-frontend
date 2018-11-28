import React from 'react';
import PostCreate from './PostCreate';
import { Provider } from 'mobx-react';
import renderer from 'react-test-renderer';
import PostStore from '../../mobx/postStore';
import userService from '../../services/user.service';

it('renders without crashing', () => {
  const navigation = {
    goBack: jest.fn(),
  };
  const postStore = new PostStore(userService); //change to mock later
  const rendered = renderer
    .create(
      <Provider postStore={postStore}>
        <PostCreate navigation={navigation} />
      </Provider>
    )
    .toJSON();
  expect(rendered).toBeTruthy();
});
