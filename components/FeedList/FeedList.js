import React from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { FeedItem } from '../index';
import { style, styles } from './FeedList.styles';
import { colors } from '../../config/theme';
import PropTypes from 'prop-types';

export class FeedList extends React.Component {
  constructor(props) {
    super(props);
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <FeedItem
      clickHandler={this.props.clickHandler}
      imageSrc={item.imageSrc}
      postData={item}
      postId={item.postId}
      postType={item.postType}
      postTime={item.postTime}
      replyCount={item.replyCount}
      score={item.score}
      text={item.text}
      voteHandler={this.props.voteHandler}
      voteType={item.voteType}
    />
  );

  renderFooter = () => {
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  };

  render() {
    const { isLoading, showFooter, data } = this.props;
    //console.log('Data ' + data);
    return isLoading || !data || data == null ? (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    ) : (
      <FlatList
        style={styles.flatListStyle}
        {...this.props}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        ListFooterComponent={showFooter ? this.renderFooter : null}
      />
    );
  }
}

FeedList.propTypes = {
  data: PropTypes.array,
  addData: PropTypes.func,
  clickHandler: PropTypes.func,
  voteHandler: PropTypes.func,
  isLoading: PropTypes.bool,
  showFooter: PropTypes.bool,
};
