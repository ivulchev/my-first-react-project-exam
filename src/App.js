import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />,
      <Login />,
      <Footer/>
    </div>
  );
}

export default App;
