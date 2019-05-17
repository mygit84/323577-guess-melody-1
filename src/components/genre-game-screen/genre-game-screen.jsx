import React from 'react';
import PropTypes from 'prop-types';


const getTrackTemplate = (index) => {

  return <div className="track" key={`answer-${index}`}>
    <button
      className="track__button track__button--play"
      type="button">
    </button>

    <div className="track__status">
      <audio></audio>
    </div>

    <div className="game__answer">
      <input
        className="game__input visually-hidden"
        type="checkbox"
        name="answer"
        value={`answer-${index}`}
        id={`answer-${index}`}
      />
      <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
    </div>
  </div>;
};

const GenreGameScreen = ({question, onAnswer}) => {
  const {
    answers,
    genre
  } = question;

  const tracks = answers.map((it, i) => {
    const track = getTrackTemplate(i);

    return track;
  });

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onAnswer();
  };

  return <section className="game__screen">
    <h2 className="game__title">Выберите {genre} треки</h2>
    <form className="game__tracks" onSubmit={handleFormSubmit}>
      {tracks}
      <button className="game__submit button" type="submit">Ответить</button>
    </form>
  </section>;
};

GenreGameScreen.propTypes = {
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired
    })).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`])
  }).isRequired
};


export default GenreGameScreen;
