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
          url1='https://www.linkedin.com/in/braismoure/'
          url2='https://www.youtube.com/c/MouredevApps'
          url3='https://mouredev.com/'
          />

          <Profile
          name='Facundo García'
          picture='Facundo'
          charge='Ingeniero de Software'
          job='Youtuber de desarrollo'
          review='Programador'
          url1='https://www.linkedin.com/in/facundo-garcia-martoni/?locale=es_ES'
          url2='https://www.youtube.com/@tigremartoni'
          url3='https://www.tiktok.com/@facmartoni'
          />
          
          <Profile
          name='Midudev'
          picture='midu'
          charge='Ingeniero de Software'
          job='Youtuber de desarrollo'
          review='Programador'
          url1='https://www.linkedin.com/in/midudev/'
          url2='https://www.youtube.com/@midudev'
          url3='https://midu.dev/'
          />


        </div>
    </div>
  );
}

export default App;
