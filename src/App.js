//import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
//import Login from './components/Login/Login';
//import Register from "./components/Register/Register";
//import Pilots from './components/Pilots/Pilots';
//import PilotDetails from './components/PilotDetails/PilotDetails';
//import Teams from './components/Teams/Teams';
import TeamDetails from './components/TeamDetails/TeamDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />,
      < TeamDetails img="https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2020/07/22113523/Sebastian-Vettel-Ferrari-badge-SF1000.jpg" name="Scuderia Ferrari" description="Scuderia Ferrari is the racing division of luxury Italian auto manufacturer Ferrari and the racing team that competes in Formula One racing. The team is also nicknamed The Prancing Horse, in reference to their logo. It is the oldest surviving and most successful Formula One team, having competed in every world championship since the 1950 Formula One season.[9] The team was founded by Enzo Ferrari, initially to race cars produced by Alfa Romeo, though by 1947 Ferrari had begun building its own cars. Among its important achievements outside Formula One are winning the World Sportscar Championship, 24 Hours of Le Mans, 24 Hours of Spa, 24 Hours of Daytona, 12 Hours of Sebring, Bathurst 12 Hour, races for Grand tourer cars and racing on road courses of the Targa Florio, the Mille Miglia and the Carrera Panamericana. The team is also known for its passionate support base known as the tifosi. The Italian Grand Prix at Monza is regarded as the team's home race.
As a constructor, Ferrari has a record 16 Constructors' Championships, the last of which was won in 2008. Alberto Ascari, Juan Manuel Fangio, Mike Hawthorn, Phil Hill, John Surtees, Niki Lauda, Jody Scheckter, Michael Schumacher and Kimi Räikkönen have won a record 15 Drivers' Championships for the team.[10] Since Räikkönen's title in 2007 the team narrowly lost out on the 2008 drivers' title with Felipe Massa and the 2010 and 2012 drivers' titles with Fernando Alonso. The 2020 Tuscan Grand Prix marked Ferrari's 1000th Grand Prix in Formula One.
Michael Schumacher is the team's most successful driver. Joining the team in 1996 and departing in 2006, he won five consecutive drivers' titles and 72 Grands Prix for the team. His titles came consecutively between 2000 and 2004, and the team won consecutive constructors' titles between 1999 and 2004; this was the team's most successful period. The team's 2021 drivers are Charles Leclerc and Carlos Sainz Jr." />,
      <Footer/>
    </div>
  );
}

export default App;
