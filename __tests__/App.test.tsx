import { fireEvent, render, screen } from '@testing-library/react-native';

import App from '../App';

jest.mock('expo-font', () => ({
  useFonts: () => [true, null],
  loadAsync: () => Promise.resolve(),
  isLoaded: () => true,
}));

jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  return {
    ...jest.requireActual('react-native-safe-area-context'),
    SafeAreaProvider: ({ children }: { children: React.ReactNode }) =>
      React.createElement(React.Fragment, null, children),
    useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
    useSafeAreaFrame: () => ({ x: 0, y: 0, width: 0, height: 0 }),
  };
});

describe('App', () => {
  it('renders the three bottom tabs with the Dashboard area active', async () => {
    await render(<App />);

    expect(await screen.findByTestId('tab-dashboard')).toBeOnTheScreen();
    expect(screen.getByTestId('tab-money')).toBeOnTheScreen();
    expect(screen.getByTestId('tab-time')).toBeOnTheScreen();

    expect(screen.getByTestId('tab-dashboard')).toBeSelected();
  });

  it('switches to the Money area when the Money tab is pressed', async () => {
    await render(<App />);

    fireEvent.press(await screen.findByTestId('tab-money'));

    expect(await screen.findByText('Money Management')).toBeOnTheScreen();
    expect(screen.getByTestId('tab-money')).toBeSelected();
  });

  it('switches to the Time area when the Time tab is pressed', async () => {
    await render(<App />);

    fireEvent.press(await screen.findByTestId('tab-time'));

    expect(await screen.findByText('Time Management')).toBeOnTheScreen();
    expect(screen.getByTestId('tab-time')).toBeSelected();
  });
});
