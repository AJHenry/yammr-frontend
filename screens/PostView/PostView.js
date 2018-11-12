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
import { LargeInput, FeedItem, BottomComment } from '../../components';

class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null,
    };

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
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'PostView',
      header: null,
      tabBarVisible: false,
    };
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  /**
   * Used for handling the back arrow on the header
   */
  goBack = () => {
    this.props.navigation.goBack();
  };

  /**
   * Used for handling comment button
   */
  commentHandler = () => {
    console.log(`Comment Handler`);
  };

  /**
   * Used for handling camera button
   */
  cameraHandler = () => {
    console.log(`Camera Handler`);
  };

  menuHandler = () => {
    console.log(`Clicked menu handler`);
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
      user={item.user}
    />
  );

  render() {
    const { navigation } = this.props;
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
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.feedItems}
                renderItem={this.renderItem}
              />
            </View>

            <BottomComment
              onChange={this.onChange}
              value={this.state.value}
              cameraHandler={this.cameraHandler}
              commentHandler={this.commentHandler}
            />
          </View>
        </KeyboardAvoidingView>
      </React.Fragment>
    );
  }
}

export default PostView;
