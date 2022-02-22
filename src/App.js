import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from 'react';

import { AuthContext } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from "./components/Register/Register";
import Pilots from './components/Pilots/Pilots';
import DriverDetails from './components/DriverDetails/DriverDetails';
import Teams from './components/Teams/Teams';
import TeamDetails from './components/TeamDetails/TeamDetails';
import AllMEMES from './components/AllMEMES/AllMEMES';
import MyMEMES from './components/MyMEMES/MyMEMES';
import ErrorPage from './components/Error/ErrorPage';
import EditMeme from './components/Edit/Edit';
import Calendar from "./components/Calendar/Calendar";
import LiveTable from './components/LiveTable/LiveTable';
import Notification from './components/Notification/Notification';
import TopVoted from './components/TopVoted/TopVoted';
import About from './components/About/About';




function App() {
  const [user, setUser] = useState(localStorage.email)
  const login = (email) => {
    setUser(email);
  }
  const logout = () => {
    setUser("");
  };
  useEffect(() => {
    setUser(localStorage.email)
  }, [])
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <NotificationProvider>
        <div className="App">
          <Navbar />
          <Notification />
          <Switch>
            <Route exact path="/" ><Home/></Route>
            <Route exact path="/top-voted" ><TopVoted /></Route>
            <Route exact path="/drivers" ><Pilots /></Route>
            <Route exact path="/drivers/:id" ><DriverDetails /></Route>
            <Route exact path="/teams" ><Teams /></Route>
            <Route exact path="/teams/:id" ><TeamDetails /></Route>
            <Route exact path="/posts/my-posts" ><MyMEMES /></Route>
            <Route exact path="/posts/my-posts/edit/:id" ><EditMeme /></Route>
            <Route exact path="/posts/all" ><AllMEMES /></Route>
            <Route exact path="/login" ><Login /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route exact path="/calendar"><Calendar /></Route>
            <Route exact path="/standings"><LiveTable /></Route>
            <Route exact path="/about"><About/></Route>
            <Route exact path="*"><ErrorPage /></Route>
          </Switch>
          <Footer />
        </div>
      </NotificationProvider>
    </AuthContext.Provider>
  );
}

export default App;
