import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const testMockData = {
  time: `0`,
  errorCount: `0`
};

it(`App is rendered correctly`, () => {
  const tree = renderer
    .create(<App
      parametersGame = {testMockData}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
