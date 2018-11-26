import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { Text, Icon, Divider, Button } from 'react-native-elements';
import { colors } from '../../config/theme';
import { style, styles } from './PostView.styles';
import { PostViewHeader, Vote } from '../../components';
import { getTimeAgo } from '../../config/helpers';
import { FeedItem, BottomComment, FeedList, Modal } from '../../components';

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

  /**
   * Used for handling the back arrow on the header
   */
  goBack = () => {
    this.props.navigation.goBack();
  };

  menuHandler = () => {
    console.log(`Clicked menu handler`);
    this.toggleModal();
  };

  toggleModal = () => this.setState({ modalVisible: !this.state.modalVisible });

  render() {
    const { navigation } = this.props;
    const { modalVisible } = this.state;
    const postData = navigation.getParam('postData', {});
    const {
      text,
      score,
      postId,
      postTime,
      replyCount,
      postType,
      voteType,
    } = postData;

    voteHander = (postId, type) => {
      console.log(
        `Vote (type: ${type}) handler called on PostView with postId: ${postId}`
      );
    };

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
              <Vote score={score} voteType={voteType} />
              <Text>{getTimeAgo(postTime)}</Text>
            </View>
          </View>
          <View style={styles.belowContainer} />
          <View style={styles.commentContainer}>
            <Text style={styles.commentHeader}>COMMENTS</Text>
            <Divider />
            <View style={styles.commentFeed}>
              <FeedList data={this.state.feedItems} />
            </View>

            <BottomComment />
          </View>
        </KeyboardAvoidingView>
        <Modal isVisible={modalVisible}>
          <Text onPress={this.toggleModal}>Hello</Text>
        </Modal>
      </React.Fragment>
    );
  }
}

export default PostView;
