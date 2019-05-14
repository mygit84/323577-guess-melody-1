import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';


Enzyme.configure({adapter: new Adapter()});

const testMockData = {
  time: `0`,
  errorCount: `0`
};

describe(`WelcomeScreen component`, () => {
  it(`should call onClick on play button click`, () => {
    const clickHahdler = jest.fn();
    const welcomeScreen = shallow(<WelcomeScreen
      parametersGame={testMockData}
      onClick={clickHahdler}
    />);

    const playButton = welcomeScreen.find(`.welcome__button`);

    playButton.simulate(`click`);

    expect(clickHahdler).toHaveBeenCalledTimes(1);
  });
});
