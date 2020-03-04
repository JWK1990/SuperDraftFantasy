import React from 'react';
import './App.css';
import Navbar from '../navbar';
import { BrowserRouter, Route } from "react-router-dom";
import Signup from '../signup';
import Login from '../login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/myAccount" component={MyAccount} />
          <Route path="/myDrafts" component={MyDrafts} />
          <Route path="/myResearch" component={MyAccount} />
          <Route path="/createDraft" component={MyAccount} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={MyAccount} />
        </div>
      </div>
    </BrowserRouter>
  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function MyAccount() {
  return (
    <div>
      <h2>My Account</h2>
    </div>
  )
}

function MyDrafts() {
  return (
    <div>
      <h2>My Drafts</h2>
    </div>
  )
}

export default App;