import React from 'react';
import {
  PostCardContainer,
  PostContent,
  AuthorInfo,
  Metadata,
  ActionButtons,
} from './PostCard.styles';

interface PostCardProps {
  title: string;
  author: string;
  likes: number;
  comments: number;
  isShared?: boolean;
  sharedText?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  author,
  likes,
  comments,
  isShared,
  sharedText,
}) => {
  return (
    <PostCardContainer>
      {isShared && sharedText && <span>{sharedText}</span>}
      <PostContent>{title}</PostContent>
      <AuthorInfo>by {author}</AuthorInfo>
      <Metadata>
        <span>{likes} Likes</span>
        <span>{comments} Comments</span>
      </Metadata>
      <ActionButtons>
        <button>Share</button>
      </ActionButtons>
    </PostCardContainer>
  );
};

export default PostCard;
