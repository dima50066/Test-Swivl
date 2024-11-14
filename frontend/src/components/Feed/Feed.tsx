import React from 'react';
import PostCard from '../PostCard/postcard';
import ToggleSwitch from '../ToggleSwitch/toggleswitch';
import { FeedWrapper } from './feed.styles';

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
    <section aria-label="User Feed">
      <FeedWrapper>
        <ToggleSwitch aria-label="Toggle Feed View" />
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
    </section>
  );
};

export default Feed;
