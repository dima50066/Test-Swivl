import React from 'react';
import Navbar from './components/Header';
// import ProfileSidebar from './components/ProfileSidebar';
// import Feed from './components/Feed';

const App: React.FC = () => {
  return (
    <>
    <header className="shadow-customDrop">
      <Navbar />
    </header>
      <main className="container mx-auto flex p-4 space-x-4">
        {/* <ProfileSidebar />
        <Feed /> */}
      </main>
      </>
  );
};

export default App;
