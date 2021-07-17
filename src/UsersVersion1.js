import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "https://api.github.com/users";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  //To get the users using the axios library
  const getUsersList = () => {
    axios.get(apiUrl).then((response) => {
      const userList = response.data;
      setUsers(userList);
      console.log(response.data);
    });
  };

  //Another React Hook
  //Immediately after a component get rendered whatever is inside useEffect will get executed
  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li>{user.login}</li>;
        })}
      </ul>
    </div>
  );
};
