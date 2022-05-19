import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Agri from './Componets/Agri'
import Login from './auth/Login';
import { login, logout, selectUser } from './feature/userSlice';
import { auth } from './firebase';
import { useEffect, useState } from "react";
import {onAuthStateChanged} from 'firebase/auth'
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
      auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          dispatch(login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email:authUser.email
          }));
          console.log(authUser);
        } else {
          dispatch(logout())
        }
      })
      
  }, [dispatch]);
  return ( 
    <div className="App">      
      <div className="App">{user ? <Agri/> : <Login/>}</div>;
    </div>
  );
}

export default App;
