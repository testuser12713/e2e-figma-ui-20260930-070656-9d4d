import { fireEvent, render, screen } from '@testing-library/react-native';

import DashboardMenuScreen from '../src/screens/DashboardMenuScreen';

jest.mock('expo-font', () => ({
  useFonts: () => [true, null],
  loadAsync: () => Promise.resolve(),
  isLoaded: () => true,
}));

const navigate = jest.fn();
const tabNavigate = jest.fn();

const navigation = {
  navigate,
  getParent: () => ({ navigate: tabNavigate }),
} as unknown as Parameters<typeof DashboardMenuScreen>[0]['navigation'];

const route = {} as Parameters<typeof DashboardMenuScreen>[0]['route'];

describe('DashboardMenuScreen', () => {
  beforeEach(() => {
    navigate.mockClear();
    tabNavigate.mockClear();
  });

  it('shows the profile and every menu entry', async () => {
    await render(<DashboardMenuScreen navigation={navigation} route={route} />);

    expect(await screen.findByText('Sophie Garnier')).toBeOnTheScreen();
    expect(screen.getByText('Luxembourg')).toBeOnTheScreen();
    expect(screen.getByText('Statistics')).toBeOnTheScreen();
    expect(screen.getByText('Account Settings')).toBeOnTheScreen();
    expect(screen.getByText('Help')).toBeOnTheScreen();
    expect(screen.getByText('Logout')).toBeOnTheScreen();
  });

  it('navigates to the statistics view when Statistics is pressed', async () => {
    await render(<DashboardMenuScreen navigation={navigation} route={route} />);

    fireEvent.press(await screen.findByTestId('menu-statistics'));

    expect(navigate).toHaveBeenCalledWith('DashboardStats');
  });

  it('navigates to the Time and Money tabs from the cards', async () => {
    await render(<DashboardMenuScreen navigation={navigation} route={route} />);

    fireEvent.press(await screen.findByTestId('card-time-management'));
    fireEvent.press(await screen.findByTestId('card-money-management'));

    expect(tabNavigate).toHaveBeenCalledWith('TimeTab');
    expect(tabNavigate).toHaveBeenCalledWith('MoneyTab');
  });
});
