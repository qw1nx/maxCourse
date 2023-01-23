import React, { useState } from 'react';

import AddUser from "./components/Users/AddUser.jsx";
import UsersList from "./components/Users/UsersList"
import usersList from "./components/Users/UsersList";
function App() {

    const [userList, setUserList] = useState([]);

    const onAddUser = (uName, uAge) => {
        setUserList((perevList) => {
            return [...perevList, {name: uName, age:uAge, id: Math.random().toString()}]
        });
    };

    return (
      <React.Fragment>
          <AddUser onAddUser={onAddUser}/>
          <UsersList users={userList}/>
      </React.Fragment>
  );
}

export default App;
