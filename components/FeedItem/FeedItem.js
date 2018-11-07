import React from 'react';
import { ImageItem } from './ImageItem/ImageItem';
import { TextItem } from './TextItem/TextItem';

export const FeedItem = props => {
  const {
    postId,
    postType,
    postTime,
    text,
    imageSrc,
    score,
    replyCount,
    clickHandler,
    voteHandler,
    voteType,
  } = props;

  switch (postType) {
    case 'image':
    case 'text':
    case 'video':
    default:
      return (
        <TextItem
          postId={postId}
          score={score}
          text={text}
          timestamp={postTime}
          replyCount={replyCount}
          clickHandler={clickHandler}
          voteHandler={voteHandler}
          voteType={voteType}
        />
      );
  }
};
