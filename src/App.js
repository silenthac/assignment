import InputDetails from './InputDetails';

import ShowDetails from './ShowDetails';
import './App.css';
import UserContext, { UserProvider } from './UserContext';
import { useContext, useState } from 'react';


function App() {

  // const {users} = useContext(UserContext);
  // console.log(users)

  return (
    <div className="App">
      <UserProvider>

        {/* <InputDetails/> */}
        <ShowDetails/>
      
      </UserProvider>
      {/* <InputDetails/> */}
     
      
    </div>
  );
}

export default App;
