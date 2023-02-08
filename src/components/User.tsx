import React from 'react';

type userProps = {
    name: string;
    age: number; 
    isRegestered: boolean;
    lang : string[];
    user: {
        institute: string;
        roll: number;
        shift: string;
        semester: string;
    }
};
const User = ({name, age, isRegestered, lang, user}: userProps) => {
    return (
        <div style={{border: "2px solid", margin: "2.5rem", padding: "5px"}}>
            <h3>{name}</h3>
            <p>{age} years old</p>
            {isRegestered ? <p>Regestered User</p> : <p>Not Regestered User</p>}
            <p>Speaks: 
                {lang.map((language,index) =>{
                    return <span key={index}>{language} </span>
                })}
            </p>
            <h6>Institute: {user.institute}</h6>
            <h6>Roll: {user.roll}</h6>
            <h6>Shift: {user.shift}</h6>
            <h6>Semester: {user.semester}</h6>
        </div>
    );
};

export default User;