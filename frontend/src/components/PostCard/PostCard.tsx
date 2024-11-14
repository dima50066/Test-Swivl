import React from 'react';
import LinkIcon from '../../icons/PostCard/LinkIcon';
import LikeIcon from '../../icons/PostCard/LikeIcon';
import PlayIcon from '../../icons/PostCard/PlayIcon';
import {
  PostCardContainer,
  PostContent,
  AuthorInfo,
  Metadata,
  ShareButton,
  SharedText,
  PostFooter,
  Avatar,
} from './PostCard.styles';

interface PostCardProps {
  title: string;
  author: string;
  likes?: number;
  comments?: number;
  isShared?: boolean;
  sharedText?: string;
  avatar?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  author,
  likes = 0,
  comments = 0,
  isShared,
  sharedText,
  avatar,
}) => {
  const hasLikesOrComments = likes > 0 || comments > 0;

  return (
    <PostCardContainer>
      {isShared && sharedText && (
        <SharedText>
          <LinkIcon /> {sharedText}
        </SharedText>
      )}
      <article aria-label="Post Content">
        <PostContent>{title}</PostContent>
      </article>
      <PostFooter>
        <AuthorInfo>
          {avatar ? <Avatar src={avatar} alt={author} /> : 'by'} {author}
        </AuthorInfo>
        {hasLikesOrComments ? (
          <Metadata>
            {likes > 0 && (
              <span aria-label="Likes">
                <LikeIcon /> {likes}
              </span>
            )}
            {comments > 0 && (
              <span aria-label="Comments">
                <PlayIcon /> {comments}
              </span>
            )}
          </Metadata>
        ) : (
          <ShareButton>
            <button aria-label="Share Post">Share</button>
          </ShareButton>
        )}
      </PostFooter>
    </PostCardContainer>
  );
};

export default PostCard;
