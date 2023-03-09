import './App.css';
import { useState } from 'react';

function App() {

  let [planet, setPlanet] = useState('sun')
  let [sky, setSky] = useState('light')


  const handleChange = () => {
    planet === 'sun' ? setPlanet('moon') : setPlanet ('sun')
    sky === 'light' ? setSky ('dark') : setSky ('light')
    return (sky, planet)
  }

  return (
    <div className={sky}>
      <div className={planet} onClick={handleChange}></div>
    </div>
  );
}

export default App;
