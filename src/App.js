//import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
//import Login from './components/Login/Login';
//import Register from "./components/Register/Register";
//import Pilots from './components/Pilots/Pilots';
//import PilotDetails from './components/PilotDetails/PilotDetails';
//import Teams from './components/Teams/Teams';
//import TeamDetails from './components/TeamDetails/TeamDetails';
//import Legends from './components/Legends/Legends';
//import LegendDetails from './components/LegendDetails/LegendDetails';
import './App.css';
//import CreateMeme from './components/CreateMeme/CreateMeme';
//import AllMEMES from './components/AllMEMES/AllMEMES';
//import MyMEMES from './components/MyMEMES/MyMEMES';
import Error from './components/Error/Error';


function App() {
  return (
    <div className="App">
      <Navbar />,
      <Error/>,
      <Footer/>
    </div>
  );
}

export default App;
