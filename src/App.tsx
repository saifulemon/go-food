import React from 'react';
import './App.css';
import User from './components/User';
import UserDemo from './components/UserDemo';

function App() {

  const user1 = {
    institute: "Feni Computer Institute",
    roll: 484079,
    shift: "1st",
    semester: "6th"
  }
  const user2 = {
    institute: "Feni Computer Institute",
    roll: 484053,
    shift: "1st",
    semester: "6th"
  }

  const users = [
    {
      id: 1,
      email: "dev.saifulemon@gmail.com",
      location: "Feni Sadar"
    },
    {
      id: 2,
      email: "neloy5654@gmail.com",
      location: "Fazil Pur"
    }
  ]
  return (
    <>
      <h1>User Management</h1>
      <User name={"Saiful Islam"} age={21} isRegestered={true} lang={["Hindi", "Arabic"]} user={user1} />
      <User name={"Arshadul Islam"} age={22} isRegestered={false} lang={["Bangla","English"]} user={user2} />
      <UserDemo users={users} />
    </>
  );
}

export default App;
