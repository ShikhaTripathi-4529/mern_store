import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from './Feed';
import { login, logout, selectUser  } from "./features/userSlice";
import Login from './Login';
import { auth } from "./firebase";

function App() {
  const user = useSelector((state) => state.user);
  console.log("\n\n\n\n 12121212",user)

  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      console.log("12345",userAuth)
      if (userAuth) {
        console.log("userAuthuserAuthvuserAuth",userAuth);
        // user is loggedIn
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL || "", 
        }))
      } else {
        // user is not loggedIn 
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="app">
      <Header/>
      {!user.value ? (<Login/>) : (
        <div className="app__body">
        <Sidebar/>
        <Feed/>
      </div>
      )}  
    </div>
  );
}

export default App;
