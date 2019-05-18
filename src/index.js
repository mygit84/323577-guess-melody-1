import ReactDOM from "react-dom";
import React from 'react';
import App from './components/app/app.jsx';
import {parametersGame} from './mocks/parameters-game-mock-data.js';
import {questions} from './mocks/questions.js';


const init = (gameQuestions, parameters) => {

  ReactDOM.render(
      <App
        parametersGame={parameters}
        questions={gameQuestions}
      />,
      document.querySelector(`.main`)
  );
};

init(questions, parametersGame);
