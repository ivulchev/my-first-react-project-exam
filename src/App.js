import './App.css';
import { Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from "./components/Register/Register";
import Pilots from './components/Pilots/Pilots';
//import PilotDetails from './components/PilotDetails/PilotDetails';
import Teams from './components/Teams/Teams';
//import TeamDetails from './components/TeamDetails/TeamDetails';
import Legends from './components/Legends/Legends';
//import LegendDetails from './components/LegendDetails/LegendDetails';
import CreateMeme from './components/CreateMeme/CreateMeme';
import AllMEMES from './components/AllMEMES/AllMEMES';
import MyMEMES from './components/MyMEMES/MyMEMES';
import ErrorPage from './components/Error/ErrorPage';
//import EditMeme from './components/Edit/Edit';
import Calendar from "./components/Calendar/Calendar"
import VoteStandings from './components/Standings/VoteStandings';


 function App() {
  return (
    <div className="App">
      <Navbar />,
      <Switch>
      <Route exact path="/" ><Home/></Route>,
      <Route exact path="/pilots" ><Pilots/></Route>,
      <Route exact path="/teams" ><Teams/></Route>,
      <Route exact path="/legends" ><Legends/></Route>,
      <Route exact path="/vote-standings" ><VoteStandings/></Route>,
      <Route exact path="/posts/my-posts" ><MyMEMES/></Route>,
      <Route exact path="/posts/create" ><CreateMeme/></Route>,
      <Route exact path="/posts/all" ><AllMEMES/></Route>,
      <Route exact path="/login" ><Login/></Route>,
      <Route exact path="/register"><Register/></Route>,
      <Route exact path="/calendar"><Calendar/></Route>,
      <Route exact path="*"><ErrorPage/></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
