import React from 'react';
import renderer from 'react-test-renderer';
import GenreGameScreen from './genre-game-screen.jsx';


const testMockData = {
  question: {
    genre: `jazz`,
    answers: [
      {
        src: ``,
        genre: `rock`
      },
      {
        src: ``,
        genre: `jazz`
      },
      {
        src: ``,
        genre: `blues`
      },
      {
        src: ``,
        genre: `rock`
      }
    ]
  }
};


it(`GenreGameScreen is rendered correctly`, () => {
  const {question} = testMockData;

  const tree = renderer
    .create(<GenreGameScreen
      onAnswer={jest.fn()}
      question={question}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
