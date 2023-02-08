import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import DataFetch from './components/DataFetch';
import NewUser from './components/NewUser';
import Post from './components/Post';
import TextStyle from './components/TextStyle';
import User from './components/User';
import UserDemo from './components/UserDemo';

type user = {
  id: number,
  name: string,
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<null | user>(null);

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

  const btnStyles = {
    color: "blue", 
    backgroundColor: "tan", 
    fontSize: "60px"
  } 

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleAddUser = () => {
    setUser({id: 1, name: "Saiful Islam"});
  }

  return (
    <div className='App'>
      <Button>click me</Button>
      <h1>User Management</h1>
      <User name={"Saiful Islam"} age={21} isRegestered={true} lang={["Hindi", "Arabic"]} user={user1} />
      <User name={"Arshadul Islam"} age={22} isRegestered={false} lang={["Bangla","English"]} user={user2} />
      <UserDemo users={users} />
      <DataFetch status="error"/>
      <Post/>
      <TextStyle textStyle={btnStyles} />
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleAddUser}>Add User</button>
      <h5>{user?.name}</h5>
      <br />
      <NewUser />
    </div>
  );
}

export default App;
