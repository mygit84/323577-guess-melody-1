import ReactDOM from "react-dom";
import React from 'react';
import App from './components/app/app.jsx';


const init = () => {

  ReactDOM.render(
      <App/>,
      document.querySelector(`.main`)
  );
};

init();
