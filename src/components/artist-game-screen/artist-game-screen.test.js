import React from 'react';
import renderer from 'react-test-renderer';
import ArtistGameScreen from './artist-game-screen.jsx';


const testMockData = {
  question: {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `path.mp3`,
    },
    answers: [
      {
        picture: `path.jpg`,
        artist: `John Snow`,
      },
      {
        picture: `path.jpg`,
        artist: `Jack Daniels`,
      },
      {
        picture: `path.jpg`,
        artist: `Jim Beam`,
      },
    ],
  },
};


it(`ArtistGameScreen is rendered correctly`, () => {
  const {question} = testMockData;

  const tree = renderer
    .create(<ArtistGameScreen
      onAnswer={jest.fn()}
      question={question}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
