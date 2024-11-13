import React from 'react';
import PostCard from '../PostCard/PostCard';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { FeedWrapper } from './Feed.styles';

interface Post {
  title: string;
  author: string;
  likes: number;
  comments: number;
  isShared?: boolean;
  sharedText?: string;
  avatar?: string;
}

const posts: Post[] = [
  {
    title: 'New air routes that promise cheap flights',
    author: 'Gregory Watkins',
    likes: 0,
    comments: 0,
    isShared: true,
    sharedText: 'Shared via weblink',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    title: 'New air routes that promise cheap flights',
    author: 'Gregory Watkins',
    likes: 0,
    comments: 0,
    isShared: true,
    sharedText: 'Shared via weblink',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    title: 'New air routes that promise cheap flights',
    author: 'Gregory Watkins',
    likes: 88,
    comments: 24,
    isShared: true,
    sharedText: 'Shared via weblink',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    title: 'New air routes that promise cheap flights',
    author: 'Gregory Watkins',
    likes: 88,
    comments: 24,
    isShared: true,
    sharedText: 'Shared via weblink',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
];

const Feed: React.FC = () => {
  return (
    <>
      <FeedWrapper>
        <ToggleSwitch />
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            author={post.author}
            likes={post.likes}
            comments={post.comments}
            isShared={post.isShared}
            sharedText={post.sharedText}
            avatar={post.avatar}
          />
        ))}
      </FeedWrapper>
    </>
  );
};

export default Feed;
