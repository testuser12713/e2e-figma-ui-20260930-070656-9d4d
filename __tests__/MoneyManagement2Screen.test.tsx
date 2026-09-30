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

  it('renders the Transactions header and controls', async () => {
    await render(<MoneyManagement2Screen navigation={navigation} route={route} />);

    expect(screen.getByText('Transactions')).toBeOnTheScreen();
    expect(screen.getByText('This month')).toBeOnTheScreen();
    expect(screen.getByText('All categories')).toBeOnTheScreen();
    expect(screen.getByPlaceholderText('Search')).toBeOnTheScreen();
  });

  it('renders the sample transaction entries', async () => {
    await render(<MoneyManagement2Screen navigation={navigation} route={route} />);

    expect(screen.getByText('Income')).toBeOnTheScreen();
    expect(screen.getByText('Monthly payroll deposit')).toBeOnTheScreen();
    expect(screen.getByText('+2,450.00€')).toBeOnTheScreen();

    expect(screen.getByText('Groceries')).toBeOnTheScreen();
    expect(screen.getByText('Weekly supermarket run')).toBeOnTheScreen();
    expect(screen.getByText('-48.20€')).toBeOnTheScreen();

    expect(screen.getByText('Transport')).toBeOnTheScreen();
    expect(screen.getByText('Train ticket')).toBeOnTheScreen();
    expect(screen.getByText('-12.80€')).toBeOnTheScreen();

    expect(screen.getByText('Housing')).toBeOnTheScreen();
    expect(screen.getByText('Apartment rent')).toBeOnTheScreen();
    expect(screen.getByText('-890.00€')).toBeOnTheScreen();
  });

  it('navigates back to the Money overview when the back button is pressed', async () => {
    await render(<MoneyManagement2Screen navigation={navigation} route={route} />);

    fireEvent.press(screen.getByTestId('money-2-back'));

    expect(goBack).toHaveBeenCalledTimes(1);
  });
});
