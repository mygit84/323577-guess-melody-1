import React, {Component} from 'react';
import PropTypes from 'prop-types';


import GameScreen from '../game-screen/game-screen.jsx';


const Type = {
  ARTIST: `game--artist`,
  GENRE: `game--genre`
};


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {questions, parametersGame} = this.props;

    return <section className={`game ${Type.ARTIST}`}>
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img
            className="game__logo"
            src="img/melody-logo-ginger.png"
            alt="Угадай мелодию"
          />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{
              filter: `url(#blur)`,
              transform: `rotate(-90deg) scaleY(-1)`,
              transformOrigin: `center`
            }}
          />
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <GameScreen
        questions={questions}
        parametersGame={parametersGame}
      />
    </section>;
  }
}

App.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  parametersGame: PropTypes.shape({
    errorCount: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  })
};


export default App;
