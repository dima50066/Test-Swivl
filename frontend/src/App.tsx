import React from 'react';
import Navbar from './components/Header/Header';
// import ProfileSidebar from './components/ProfileSidebar';
// import Feed from './components/Feed';

const App: React.FC = () => {
  return (
    <>
    <header className="">
      <Navbar />
    </header>
      <main className="">
        {/* <ProfileSidebar />
        <Feed /> */}
      </main>
      </>
  );
};

export default App;
