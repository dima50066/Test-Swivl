import React from 'react';
import Navbar from './components/Header/Header';
import ProfileSidebar from './components/ProfileSidebar/ProfileSidebar';
// import Feed from './components/Feed';

const App: React.FC = () => {
  return (
    <>
      <header className="section">
        <Navbar />
      </header>
      <main className="section">
        <ProfileSidebar />
        {/* <Feed /> */}
      </main>
    </>
  );
};

export default App;
