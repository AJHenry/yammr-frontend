import React from 'react';
import { ImageItem } from './ImageItem/ImageItem';
import { TextItem } from './TextItem/TextItem';
import { CommentItem } from './Comment/CommentItem';

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
    user,
    voteHandler,
    voteType,
  } = props;

  switch (postType) {
    case 'comment':
      return (
        <CommentItem
          user={user}
          postId={postId}
          score={score}
          text={text}
          timestamp={postTime}
          clickHandler={clickHandler}
          voteHandler={voteHandler}
          voteType={voteType}
        />
      );
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
