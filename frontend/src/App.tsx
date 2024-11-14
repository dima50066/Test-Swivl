import React from 'react';
import Navbar from './components/Header/Header';
import ProfileSidebar from './components/ProfileSidebar/profilesidebar';
import Feed from './components/Feed/Feed';

const App: React.FC = () => {
  return (
    <>
      <header role="banner" aria-label="Main Navigation">
        <Navbar />
      </header>
      <main role="main" aria-labelledby="main-content" className="section">
        <aside role="complementary" aria-label="User Profile Sidebar">
          <ProfileSidebar />
        </aside>
        <section aria-labelledby="feed-section">
          <h1 id="feed-section" style={{ display: 'none' }}>
            User Feed
          </h1>
          <Feed />
        </section>
      </main>
    </>
  );
};

export default App;
