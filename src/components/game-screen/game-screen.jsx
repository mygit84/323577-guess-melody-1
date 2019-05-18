import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ArtistGameScreen from '../artist-game-screen/artist-game-screen.jsx';
import GenreGameScreen from '../genre-game-screen/genre-game-screen.jsx';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';


class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: -1
    };

    this._getNumberOfScreen = this._getNumberOfScreen.bind(this);
  }

  _getNumberOfScreen() {
    const {questions} = this.props;

    this.setState({
      question: this.state.question + 1 >= questions.length
        ? -1
        : this.state.question + 1
    });
  }

  _getScreen(question) {

    if (!question) {

      const {
        parametersGame
      } = this.props;

      return <WelcomeScreen
        parametersGame={parametersGame}
        onClick={this._getNumberOfScreen}
      />;
    }

    switch (question.type) {
      case `genre`: return <GenreGameScreen
        question={question}
        onAnswer={this._getNumberOfScreen}
      />;

      case `artist`: return <ArtistGameScreen
        question={question}
        onAnswer={this._getNumberOfScreen}
      />;
    }

    return null;
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return <div>
      {this._getScreen(questions[question])}
    </div>;
  }
}

GameScreen.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  parametersGame: PropTypes.shape({
    errorCount: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  })
};


export default GameScreen;
