import React from 'react';
import PropTypes from 'prop-types';


const getArtistTempate = (index, picture, artist) => {

  return <div className="artist" key={`answer-${index}`}>
    <input
      className="artist__input visually-hidden"
      type="radio"
      name="answer" value={`artist-${index}`}
      id={`artist-${index}`}
    />
    <label className="artist__name" htmlFor={`artist-${index}`}>
      <img
        className="artist__picture"
        src={picture}
        alt={artist}
      />
      {artist}
    </label>
  </div>;
};


const ArtistGameScreen = ({question, onAnswer}) => {
  const {answers} = question;

  const artists = answers.map((it, i) => {
    const artist = getArtistTempate(i, it.picture, it.artist);

    return artist;
  });

  return <section className="game__screen">
    <h2 className="game__title">Кто исполняет эту песню?</h2>
    <div className="game__track">
      <button className="track__button track__button--play" type="button"></button>
      <audio></audio>
    </div>

    <form className="game__artist" onChange={onAnswer}>
      {artists}
    </form>
  </section>;
};

ArtistGameScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired
};


export default ArtistGameScreen;
