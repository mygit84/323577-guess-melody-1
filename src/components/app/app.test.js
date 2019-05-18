import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';


const testMockData = {
  time: `0`,
  errorCount: `0`
};
const testMockQuestions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `test.mp3`,
        genre: `rock`,
      },
      {
        src: `test.mp3`,
        genre: `blues`,
      },
      {
        src: `test.mp3`,
        genre: `jazz`,
      },
      {
        src: `test.mp3`,
        genre: `rock`,
      },
    ],
  },
  {
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
  }
];

it(`App is rendered correctly`, () => {
  const tree = renderer
    .create(<App
      questions={testMockQuestions}
      parametersGame = {testMockData}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
