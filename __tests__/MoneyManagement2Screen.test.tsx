import { fireEvent, render, screen } from '@testing-library/react-native';

import MoneyManagement2Screen from '../src/screens/MoneyManagement2Screen';

jest.mock('expo-font', () => ({
  useFonts: () => [true, null],
  loadAsync: () => Promise.resolve(),
  isLoaded: () => true,
}));

jest.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));

describe('MoneyManagement2Screen', () => {
  const goBack = jest.fn();
  const navigation = { goBack } as any;
  const route = { key: 'mm2', name: 'MoneyManagement2', params: undefined } as any;

  beforeEach(() => {
    goBack.mockClear();
  });

  it('renders the weekly report heading and legend', async () => {
    await render(<MoneyManagement2Screen navigation={navigation} route={route} />);

    expect(screen.getByText('weekly report')).toBeOnTheScreen();
    expect(screen.getByText('expenses')).toBeOnTheScreen();
    expect(screen.getByText('deposit')).toBeOnTheScreen();
  });

  it('renders the sample expense entries', async () => {
    await render(<MoneyManagement2Screen navigation={navigation} route={route} />);

    expect(screen.getByText('movie')).toBeOnTheScreen();
    expect(screen.getByText('Spend On Fun Mall Cinema')).toBeOnTheScreen();
    expect(screen.getByText('23.00€')).toBeOnTheScreen();

    expect(screen.getByText('coffee')).toBeOnTheScreen();
    expect(screen.getByText('Spend On Starbucks')).toBeOnTheScreen();
    expect(screen.getByText('13.00€')).toBeOnTheScreen();

    expect(screen.getAllByText('shop')).toHaveLength(2);
    expect(screen.getAllByText('Spend On Super Market')).toHaveLength(2);
  });

  it('navigates back to the Money overview when the back button is pressed', async () => {
    await render(<MoneyManagement2Screen navigation={navigation} route={route} />);

    fireEvent.press(screen.getByTestId('money-management-2-back'));

    expect(goBack).toHaveBeenCalledTimes(1);
  });
});
