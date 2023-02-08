import React from "react";

type userDemoProps = {
  users: {
    id: number;
    email: string;
    location: string;
  }[];
};
const UserDemo = ({ users }: userDemoProps) => {
  console.log(users);
  return (
    <div>
      {users.map((user) => {
        const { id, email, location } = user;
        return (
          <div key={id}>
            <h2>Email: {email}</h2>
            <h4>Location: {location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default UserDemo;
