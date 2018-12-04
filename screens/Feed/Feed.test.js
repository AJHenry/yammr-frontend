import React from 'react';
import { Provider } from 'mobx-react';
import Feed from './Feed';

import renderer from 'react-test-renderer';
import PostStore from '../../mobx/postStore';
import userService from '../../services/user.service';

it('renders without crashing', () => {
  const postStore = new PostStore(userService); //change to mock later
  const rendered = renderer
    .create(
      <Provider postStore={postStore}>
        <Feed />
      </Provider>
    )
    .toJSON();
  expect(rendered).toBeTruthy();
});
