import React from 'react';
import { FlatList } from 'react-native';
import { FeedHeader, FeedItem } from '../../components';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    const feedItems = [
      {
        text: 'Watermelon is a meat?',
        score: 99,
        postId: 'asdf1',
        postTime: new Date(),
        replyCount: 1,
        postType: 'text',
        voteType: 'down',
      },
      {
        text: `Those who survived the San Francisco earthquake said, "Thank God, I'm still alive." But, of course, those who died, their lives will never be the same again.`,
        score: 50,
        postId: 'lkj4',
        postTime: new Date(Date.now() - 24 * 60 * 60 * 1000),
        voteType: 'down',
      },
      {
        text: 'Negative Post',
        score: -8,
        postId: 'gfbfg8',
        postTime: new Date(Date.now() - 546456),
        replyCount: 2,
      },
      {
        text: 'Overflow Post',
        score: 0,
        postId: 'weroiw9',
        postTime: new Date(Date.now() - 346457457),
      },
    ];

    this.state = {
      text: 'Top Feed',
      feedItems: feedItems,
    };
  }

  static navigationOptions = {
    header: null,
  };

  /**
   * Helper function for getting post data from the feed data list
   * TODO: this method is pretty inefficient at O(n),
   * we can make it O(1) if we make the data an Object with postId as the key
   */
  getPostData = postId => {
    let selectedPost = null;

    for (let post of this.state.feedItems) {
      if (post.postId === postId) {
        selectedPost = post;
        break;
      }
    }

    return selectedPost;
  };

  /**
   * Called when the compose button in the header is clicked
   */
  composeHandle = () => {
    console.log('Compose Handler');
    this.props.navigation.push('PostCreate');
  };

  /**
   * Called when a post is clicked on
   */
  clickHandle = postId => {
    let postData = this.getPostData(postId);

    this.props.navigation.push('PostView', {
      postData: postData,
    });
  };

  /**
   * Called when a vote is cast on a post
   */
  voteHandle = (postId, voteType) => {
    console.log(`VoteType: ${voteType} vote on postID: ${postId}`);
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
      imageSrc={item.imageSrc}
      postData={item}
      postId={item.postId}
      postType={item.postType}
      postTime={item.postTime}
      replyCount={item.replyCount}
      score={item.score}
      text={item.text}
      voteHandler={this.voteHandle}
      voteType={item.voteType}
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
