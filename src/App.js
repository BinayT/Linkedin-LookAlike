import React from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='app'>
      {/* Header */}
      <Header />
      {/* Sidebar */}
      <div className='app__body'>
        <Sidebar />
        {/* Feed */}
        {/* Widget */}
      </div>
    </div>
  );
}

export default App;
