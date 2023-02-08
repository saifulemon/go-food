import React from 'react';
import './App.css';
import User from './components/User';

function App() {
  return (
    <>
      <h1>User Management</h1>
      <User name={"Saiful Islam"} age={21} isRegestered={true} />
      <User name={"Arshadul Islam"} age={22} isRegestered={false} />
    </>
  );
}

export default App;
