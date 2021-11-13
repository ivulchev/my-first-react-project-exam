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
import LegendDetails from './components/LegendDetails/LegendDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />,
      <LegendDetails img="https://www.sportfair.it/wp-content/uploads/2019/01/Michael-Schumacher-3.jpg" name="Michael Schumacher" description="Born 3 January 1969. Michael is a German former racing driver who competed in Formula One for Jordan, Benetton, Ferrari, and Mercedes. Schumacher has a joint-record seven World Drivers' Championship titles (tied with Lewis Hamilton) and, at the time of his retirement from the sport in 2012, he held the records for the most wins (91), pole positions (68) and podium finishes (155)—which have since been broken by Hamilton—while he maintains the record for the most fastest laps (77), amongst others." />,
      <Footer/>
    </div>
  );
}

export default App;
