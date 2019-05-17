import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GameScreen from './game-screen.jsx';


configure({adapter: new Adapter()});

const testMockData = {
  time: `0`,
  errorCount: `0`
};

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `path`,
          genre: `rock`,
        },
      ],
    },
    {
      type: `artist`,
      song: {
        artist: `One`,
        src: ``,
      },
      answers: [
        {
          picture: ``,
          artist: `One`,
        },
      ],
    }
  ],
};


it(`On click on WelcomeScreen GameScreen switches to the first question`, () => {
  const {questions} = mock;
  const gameScreen = mount(<GameScreen
    parametersGame={testMockData}
    questions={questions}
  />);

  expect(gameScreen.state(`question`)).toEqual(-1);

  const button = gameScreen.find(`button`);
  button.simulate(`click`);
  gameScreen.update();

  expect(gameScreen.state(`question`)).toEqual(0);
});


it(`Question answer switches to another question`, () => {
  const {questions} = mock;
  const gameScreen = mount(<GameScreen
    parametersGame={testMockData}
    questions={questions}
  />);

  gameScreen.setState({
    question: 0,
  });
  gameScreen.update();

  const form = gameScreen.find(`form`);
  form.simulate(`submit`, {
    preventDefault() {},
  });

  expect(gameScreen.state(`question`)).toEqual(1);
});


it(`Last question answer leads to the first screen`, () => {
  const {questions} = mock;
  const gameScreen = mount(<GameScreen
    parametersGame={testMockData}
    questions={questions}
  />);

  gameScreen.setState({
    question: questions.length - 1,
  });
  gameScreen.update();

  const form = gameScreen.find(`form`);
  form.simulate(`change`, {
    preventDefault() {}
  });

  expect(gameScreen.state(`question`)).toEqual(-1);
});
