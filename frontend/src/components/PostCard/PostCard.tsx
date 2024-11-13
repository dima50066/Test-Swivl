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
      <PostContent>{title}</PostContent>
      <PostFooter>
        <AuthorInfo>
          {avatar ? <Avatar src={avatar} alt={author} /> : 'by'} {author}
        </AuthorInfo>
        {hasLikesOrComments ? (
          <Metadata>
            {likes > 0 && (
              <>
                <LikeIcon /> <span>{likes}</span>
              </>
            )}
            {comments > 0 && (
              <>
                <PlayIcon /> <span>{comments}</span>
              </>
            )}
          </Metadata>
        ) : (
          <ShareButton>
            <button>Share</button>
          </ShareButton>
        )}
      </PostFooter>
    </PostCardContainer>
  );
};

export default PostCard;
