import './App.css';
import Profile from '../src/components/profile';
import '../src/steelsheet/profile.css';

function App() {
  return (
    <div className="App">
        <div className='main-container'>
          <h1>Mis divulgadores de desarrollo preferidos son: </h1>

          <Profile
          name='Brais-Moure'
          picture='Brais-Moure'
          charge='Ingeniero de Software'
          job='Youtuber de desarrollo'
          review='Programador'
          />

          <Profile
          name='Facundo García'
          picture='Facundo'
          charge='Ingeniero de Software'
          job='Youtuber de desarrollo'
          review='Programador'
          />

          <Profile
          name='Midu'
          picture='midu'
          charge='Ingeniero de Software'
          job='Youtuber de desarrollo'
          review='Programador'
          />

        </div>
    </div>
  );
}

export default App;
