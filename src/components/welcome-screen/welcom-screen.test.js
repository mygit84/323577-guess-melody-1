import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';


const testMockData = {
  time: `0`,
  errorCount: `0`
};


it(`WelcomeScreen is rendered correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      parametersGame={testMockData}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
