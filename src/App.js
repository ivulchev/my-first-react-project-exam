//import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
//import Login from './components/Login/Login';
//import Register from "./components/Register/Register";
//import Pilots from './components/Pilots/Pilots';
import PilotDetails from './components/PilotDetails/PilotDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />,
      <PilotDetails img="https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.640.medium.jpg/1617101447981.jpg" 
      name = "Max Verstappen"
      description="Born 30 September 1997. Verstappen is a Belgian-Dutch racing driver currently competing in Formula One, under the Dutch flag, with Red Bull Racing. At the 2015 Australian Grand Prix, when he was aged 17 years, 166 days, he became the youngest driver to compete in Formula One. " />,
      <Footer/>
    </div>
  );
}

export default App;
