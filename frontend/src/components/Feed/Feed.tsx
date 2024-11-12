import React from 'react';
import PostCard from '../PostCard/PostCard';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { FeedContainer, PostWrapper, FeedWrapper } from './Feed.styles';

interface Post {
  title: string;
  author: string;
  likes: number;
  comments: number;
  isShared?: boolean;
  sharedText?: string;
}

const posts: Post[] = [
  {
    title: 'New air routes that promise cheap flights',
    author: 'Gregory Watkins',
    likes: 88,
    comments: 24,
    isShared: true,
    sharedText: 'Shared via weblink',
  },
  {
    title: 'New air routes that promise cheap flights',
    author: 'Gregory Watkins',
    likes: 88,
    comments: 24,
    isShared: true,
    sharedText: 'Shared via weblink',
  },
  {
    title: 'New air routes that promise cheap flights',
    author: 'Gregory Watkins',
    likes: 88,
    comments: 24,
    isShared: true,
    sharedText: 'Shared via weblink',
  },
];

const Feed: React.FC = () => {
  return (
    <>
      <FeedWrapper>
        <ToggleSwitch />
        <FeedContainer>
          {posts.map((post, index) => (
            <PostWrapper key={index}>
              <PostCard
                title={post.title}
                author={post.author}
                likes={post.likes}
                comments={post.comments}
                isShared={post.isShared}
                sharedText={post.sharedText}
              />
            </PostWrapper>
          ))}
        </FeedContainer>
      </FeedWrapper>
    </>
  );
};

export default Feed;
