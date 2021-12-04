import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from "react";
import { authServices } from "./services/authService";
import { useHistory } from 'react-router';
import { AuthContext } from './contexts/AuthContext';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from "./components/Register/Register";
import Pilots from './components/Pilots/Pilots';
import PilotDetails from './components/PilotDetails/PilotDetails';
import Teams from './components/Teams/Teams';
import TeamDetails from './components/TeamDetails/TeamDetails';
import Legends from './components/Legends/Legends';
import LegendDetails from './components/LegendDetails/LegendDetails';
import CreateMeme from './components/CreateMeme/CreateMeme';
import AllMEMES from './components/AllMEMES/AllMEMES';
import MyMEMES from './components/MyMEMES/MyMEMES';
import ErrorPage from './components/Error/ErrorPage';
//import EditMeme from './components/Edit/Edit';
import Calendar from "./components/Calendar/Calendar";




function App() {
  const [user, setUser] = useState("")
  const login = (email) => {
    setUser(email);
  }
  const logout = () => {
    setUser("");
  };
  return (
    <AuthContext.Provider value={{user, login, logout}}>
    <div className="App">
      <Navbar/>,
      <Switch>
        <Route exact path="/" ><Home /></Route>,
        <Route exact path="/pilots" ><Pilots /></Route>,
        <Route exact path="/pilots/:id" ><PilotDetails /></Route>,
        <Route exact path="/teams" ><Teams /></Route>,
        <Route exact path="/teams/:id" ><TeamDetails /></Route>,
        <Route exact path="/legends" ><Legends /></Route>,
        <Route exact path="/legends/:id" ><LegendDetails /></Route>,
        <Route exact path="/posts/my-posts" ><MyMEMES /></Route>,
        <Route exact path="/posts/create" ><CreateMeme /></Route>,
        <Route exact path="/posts/all" ><AllMEMES /></Route>,
        <Route exact path="/login" ><Login/></Route>,
        <Route exact path="/register"><Register /></Route>,
        <Route exact path="/calendar"><Calendar /></Route>,
        <Route exact path="*"><ErrorPage /></Route>
      </Switch>
      <Footer />
    </div>
    </AuthContext.Provider>
  );
}

export default App;
