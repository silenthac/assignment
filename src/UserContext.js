import React, {Children, createContext, useState} from 'react'
import App from './App';

const UserContext = createContext();

export const UserProvider = ({children})=>{

    const [users,setUsers] = useState([]);
    console.log('all', users)

    const addUser = (user)=>{
        const isDuplicate = users.some((u)=>u.email===user.email);
        if(isDuplicate)
        {
            alert('Email already Exists');
            return;
        }
        setUsers([...users,user]);
        alert('Details are saved Successfully.');
    }

    const editUser =  (updatedUser)=>{
        setUsers(users.map((user)=>(user.email===updatedUser.email?updatedUser:user)))
    }

    const searchUser = (email)=>{
        return users.find((user)=>user.email===email)

    }

    return <UserContext.Provider value={{users,addUser,editUser,searchUser}}>
        {children}
        
    </UserContext.Provider>

}

export default UserContext;