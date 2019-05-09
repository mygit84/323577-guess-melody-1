import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import {parametersGame} from './app-mock-data.js';


const App = () => {

  return <WelcomeScreen
    parametersGame = {parametersGame}
  />;
};


export default App;
