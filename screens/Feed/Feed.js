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
import AuthenticationHeader from '../../components/CustomHeaders/AuthenticationHeaders/AuthenticationHeader';
import FeedHeader from '../../components/FeedHeader/FeedHeader';
import { FeedItem } from '../../components/FeedItem/FeedItem';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    const feedItems = [
      {
        text: 'Watermelon is a meat?',
        score: 100,
        postId: 'asdfljkhasfl',
      },
      {
        text: `Those who survived the San Francisco earthquake said, "Thank God, I'm still alive." But, of course, those who died, their lives will never be the same again.`,
        score: 50,
        postId: 'asdfljkhasfl',
      },
      {
        text: 'Negative Post',
        score: -8,
        postId: 'asdfljkhasfl',
      },
    ];

    this.state = {
      text: 'Top Feed',
      feedItems: feedItems,
    };

    this.composeHandle = this.composeHandle.bind(this);
    this.feedHandler = this.feedHandler.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  composeHandle = () => {
    console.log('Compose Handler');
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
      postId={item.postId}
      postType={item.postType}
      text={item.text}
      image={item.image}
      score={item.score}
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
