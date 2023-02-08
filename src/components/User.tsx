import React from 'react';

type userProps = {
    name: string;
    age: number; 
    isRegestered: boolean
};
const User = ({name, age, isRegestered}: userProps) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{age} years old</p>
            {isRegestered ? <p>Regestered User</p> : <p>Not Regestered User</p>}
        </div>
    );
};

export default User;