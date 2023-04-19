//import logo from './logo.svg';
import './css/style.css';
//import './css/styles2.css';
import Home from './Home';
import React, { useState } from 'react';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <Home />
      <div className={darkMode ? 'dark' : ''}>
        <button className="dark-mode" onClick={handleClick}>
          Dark Mode
        </button>
      </div>
    </div>
  );
}



export default App;
