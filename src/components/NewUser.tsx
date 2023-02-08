import React, { useState, ChangeEvent, MouseEvent } from 'react';

const NewUser = () => {
    const [userName, setUserName] = useState("")

    const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(userName);
    }

    return (
        <div>
            <h2>Create New User</h2>
            <input type="text" placeholder='enter user name' value={userName} onChange={handleUserNameChange}/>
            <p>{userName}</p>
            <br />
            <button onClick={handleClick}>Show Name</button>
        </div>
    );
};

export default NewUser;