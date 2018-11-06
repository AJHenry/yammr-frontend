import React from 'react';
import { FlatList } from 'react-native';
import {
  Text,
  Icon,
  Header,
  ButtonGroup,
  ListItem,
} from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './Feed.styles';
import FeedHeader from '../../components/FeedHeader/FeedHeader';
import { FeedItem } from '../../components/FeedItem/FeedItem';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    const feedItems = [
      {
        text: 'Watermelon is a meat?',
        score: 99,
        postId: 'asdfljkhasfl',
        postTime: new Date(),
        replyCount: 1,
      },
      {
        text: `Those who survived the San Francisco earthquake said, "Thank God, I'm still alive." But, of course, those who died, their lives will never be the same again.`,
        score: 50,
        postId: 'asdfljkhasfl',
        postTime: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        text: 'Negative Post',
        score: -8,
        postId: 'asdfljkhasfl',
        postTime: new Date(Date.now() - 546456),
        replyCount: 2,
      },
      {
        text: 'Overflow Post',
        score: 0,
        postId: 'asdfljkhasfl',
        postTime: new Date(Date.now() - 346457457),
      },
    ];

    this.state = {
      text: 'Top Feed',
      feedItems: feedItems,
    };

    this.composeHandle = this.composeHandle.bind(this);
    this.feedHandler = this.feedHandler.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  /**
   * Called when the compose button in the header is clicked
   */
  composeHandle = () => {
    console.log('Compose Handler');
  };

  /**
   * Called when a post is clicked on
   */
  clickHandle = postId => {
    this.props.navigation.push('PostView', {
      postId: postId,
    });
  };

  feedHandler = index => {
    console.log('Feed Handler');
    console.log(`Index Selected : ${index}`);

    switch (index) {
      case 0:
        this.setState({
          text: 'New Feed',
        });
        break;
      case 1:
        this.setState({
          text: 'Top Feed',
        });
        break;
      case 2:
        this.setState({
          text: 'Hot Feed',
        });
        break;
      default:
        console.log('severe error');
    }
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <FeedItem
      clickHandler={this.clickHandle}
      postId={item.postId}
      postType={item.postType}
      postTime={item.postTime}
      text={item.text}
      image={item.image}
      score={item.score}
      replyCount={item.replyCount}
    />
  );

  render() {
    return (
      <React.Fragment>
        <FeedHeader
          composeHandler={this.composeHandle}
          feedHandler={this.feedHandler}
        />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.feedItems}
          renderItem={this.renderItem}
        />
      </React.Fragment>
    );
  }
}

export default Feed;
