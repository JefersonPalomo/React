import logo from './logo.svg';
import './App.css';
import Profile from '../src/components/profile';
import '../src/steelsheet/profile.css';

function App() {
  return (
    <div className="App">
        <div className='main-container'>
          <h1>Mis divulgadores de desarrollo preferidos son: </h1>

          <Profile
          name='Facundo García'
          country='Argentina'
          picture='Brais-Moure'
          charge='Ingeniero de Software'
          job='Youtuber de desarrollo'
          review='Programador y antiguo profesor de Platzy'
          />

          <Profile
          name='Facundo García'
          country='Argentina'
          picture='Facundo'
          charge='Ingeniero de Software'
          job='Youtuber de desarrollo'
          review='Programador y antiguo profesor de Platzy'
          />

          <Profile
          name='Facundo García'
          country='Argentina'
          picture='midu'
          charge='Ingeniero de Software'
          job='Youtuber de desarrollo'
          review='Programador y antiguo profesor de Platzy'
          />

        </div>
    </div>
  );
}

export default App;
