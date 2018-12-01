import React from 'react';
import { FlatList, Text } from 'react-native';
import { FeedHeader, FeedList, FeedItem } from '../../components';
import { observer, inject } from 'mobx-react';

@inject('postStore')
@observer
class Feed extends React.Component {
  constructor(props) {
    super(props);

    const feedItems = null;

    this.state = {
      selectedIndex: 0,
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
    const { postStore } = this.props;
    let selectedPost = null;

    for (let post of postStore.getFeed) {
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

  // Called when component renders
  componentDidMount = () => {
    const { postStore } = this.props;
    postStore.getPosts();
  };

  // Called when we want to grab more posts
  getMorePosts = () => {
    const { postStore } = this.props;
    postStore.getMorePosts();
  };

  // Called when a post is clicked on
  clickHandler = postId => {
    let postData = this.getPostData(postId);

    this.props.navigation.push('PostView', {
      postData: postData,
      voteHandler: this.voteHandler,
    });
  };

  componentWillUnmount = () => {
    console.log('Component unmounted');
  };

  // Called when a vote is cast on a post
  voteHandler = (postId, voteType, score) => {
    const { postStore } = this.props;
    console.log(
      `VoteType: ${voteType} vote on postID: ${postId} with score: ${score}`
    );
    postStore.updatePostVote(postId, voteType, score);
  };

  feedHandler = index => {
    const { postStore } = this.props;
    console.log('Feed Handler');
    console.log(`Index Selected : ${index}`);
    postStore.setFeed(index);
  };

  render() {
    const { postStore } = this.props;
    return (
      <React.Fragment>
        <FeedHeader
          composeHandler={this.composeHandle}
          feedHandler={this.feedHandler}
        />
        <FeedList
          onEndReachedThreshold={0.5}
          onEndReached={this.getMorePosts}
          isLoading={postStore.mFeedLoading}
          showFooter={postStore.mFeedFooter}
          refreshing={postStore.mFeedRefresh}
          onRefresh={this.onRefresh}
          data={postStore.getFeed}
          clickHandler={this.clickHandler}
          voteHandler={this.voteHandler}
        />
      </React.Fragment>
    );
  }
}

export default Feed;
