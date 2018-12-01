import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { Text, Icon, Divider, Button, ListItem } from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './PostView.styles';
import { PostViewHeader, Vote } from '../../components';
import { getTimeAgo } from '../../config/helpers';
import {
  FeedItem,
  BottomComment,
  FeedList,
  Modal,
  TouchablePlatformSpecific,
} from '../../components';

class PostView extends React.Component {
  constructor(props) {
    super(props);

    const feedItems = [
      {
        text: 'Comment One',
        score: 3,
        postId: 'asdf1',
        postTime: new Date(Date.now() - 24 * 60 * 60 * 4587),
        user: 'HairyOrange67',
        postType: 'comment',
        voteType: 'down',
      },
      {
        text: 'Comment Two',
        score: 0,
        postId: 'sdfef',
        postTime: new Date(Date.now() - 24 * 60 * 60),
        user: 'WireyTumbleWeed45',
        postType: 'comment',
      },
    ];

    this.state = {
      feedItems: feedItems,
      modalVisible: false,
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'PostView',
      header: null,
      tabBarVisible: false,
    };
  };

  // Used for handling the back arrow on the header
  goBack = () => {
    this.props.navigation.goBack();
  };

  // Used for menu press
  menuHandler = () => {
    console.log(`Clicked menu handler`);
    this.toggleModal();
  };

  // Toggles the menu
  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  // Used for issuing a service command for a vote on a comment
  commentVoteHandler = (postId, type) => {
    console.log(`Comment vote handler: ${type} on postID:${postId}`);
  };

  render() {
    const { navigation } = this.props;
    const { modalVisible } = this.state;
    const postData = navigation.getParam('postData', {});
    const voteHandler = navigation.getParam('voteHandler', () => {});
    const {
      text,
      score,
      postId,
      postTime,
      replyCount,
      postType,
      voteType,
    } = postData;

    return (
      <React.Fragment>
        <PostViewHeader goBack={this.goBack} menuHandler={this.menuHandler} />
        <KeyboardAvoidingView
          style={styles.mainContainer}
          behavior="padding"
          enabled
        >
          <View style={styles.aboveContainer} />
          <View style={styles.contentContainer}>
            <View style={styles.postContainer}>
              <Text style={styles.contentStyle}>{text}</Text>
            </View>
            <View style={styles.sideContainer}>
              <Vote
                postId={postId}
                voteHandler={voteHandler}
                score={score}
                voteType={voteType}
              />
              <Text>{getTimeAgo(postTime)}</Text>
            </View>
          </View>
          <View style={styles.belowContainer} />
          <View style={styles.commentContainer}>
            <Text style={styles.commentHeader}>COMMENTS</Text>
            <Divider />
            <View style={styles.commentFeed}>
              <FeedList
                data={this.state.feedItems}
                voteHandler={this.commentVoteHandler}
              />
            </View>

            <BottomComment />
          </View>
        </KeyboardAvoidingView>
        <Modal
          isVisible={modalVisible}
          onBackdropPress={this.toggleModal}
          onBackButtonPress={this.toggleModal}
        >
          <ListItem
            component={TouchablePlatformSpecific}
            title="Report"
            leftIcon={<Icon name="flag" />}
          />
          <Divider />
          <ListItem
            component={TouchablePlatformSpecific}
            title="Delete Post"
            leftIcon={<Icon name="flag" />}
          />
        </Modal>
      </React.Fragment>
    );
  }
}

export default PostView;
