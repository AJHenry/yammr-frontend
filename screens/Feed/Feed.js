import React from 'react';
import { FlatList } from 'react-native';
import { FeedHeader, FeedList, FeedItem } from '../../components';

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
      isFetching: false,
      isLoading: false,
      showFooter: true,
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

  onRefresh = () => {
    this.setState({ isFetching: true }, () => {
      setTimeout(() => {
        this.setState({ isFetching: false });
      }, 2000);
    });
  };

  // Called when the compose button in the header is clicked
  composeHandle = () => {
    console.log('Compose Handler');
    this.props.navigation.push('PostCreate');
  };

  // Called when a post is clicked on
  clickHandler = postId => {
    let postData = this.getPostData(postId);

    this.props.navigation.push('PostView', {
      postData: postData,
    });
  };

  // Called when a vote is cast on a post
  voteHandler = (postId, voteType) => {
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

  render() {
    return (
      <React.Fragment>
        <FeedHeader
          composeHandler={this.composeHandle}
          feedHandler={this.feedHandler}
        />
        <FeedList
          isLoading={this.state.isLoading}
          showFooter={this.state.showFooter}
          refreshing={this.state.isFetching}
          onRefresh={this.onRefresh}
          data={this.state.feedItems}
          clickHandler={this.clickHandler}
          voteHandler={this.voteHandler}
        />
      </React.Fragment>
    );
  }
}

export default Feed;
