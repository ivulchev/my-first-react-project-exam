//import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
//import Login from './components/Login/Login';
//import Register from "./components/Register/Register";
import Pilots from './components/Pilots/Pilots';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />,
      <Pilots />,
      <Footer/>
    </div>
  );
}

export default App;
