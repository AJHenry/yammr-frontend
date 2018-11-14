import React from 'react';
import { FlatList } from 'react-native';
import { FeedItem } from '../index';
import PropTypes from 'prop-types';

export class FeedList extends React.Component {
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

  render() {
    const { data } = this.props;
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={this.renderItem}
      />
    );
  }
}

FeedList.propTypes = {
  data: PropTypes.array.isRequired,
  clickHandler: PropTypes.func,
  voteHandler: PropTypes.func,
};
