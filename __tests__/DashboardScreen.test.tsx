import { fireEvent, render, screen } from '@testing-library/react-native';

import DashboardScreen from '../src/screens/DashboardScreen';

const makeNavigation = () => ({
  navigate: jest.fn(),
  goBack: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  isFocused: () => true,
});

const renderScreen = async () => {
  const navigation = makeNavigation();
  await render(
    <DashboardScreen
      navigation={navigation as never}
      route={{ key: 'Dashboard', name: 'Dashboard', params: undefined } as never}
    />,
  );
  return navigation;
};

describe('DashboardScreen', () => {
  it('shows the header, the search field and the four menu cards', async () => {
    await render(
      <DashboardScreen
        navigation={makeNavigation() as never}
        route={{ key: 'Dashboard', name: 'Dashboard', params: undefined } as never}
      />,
    );

    expect(screen.getByText('Dashboard')).toBeOnTheScreen();
    expect(screen.getByTestId('dashboard-search')).toBeOnTheScreen();

    expect(screen.getByText('Time Management')).toBeOnTheScreen();
    expect(screen.getByText('Money Management')).toBeOnTheScreen();
    expect(screen.getByText('Food Management')).toBeOnTheScreen();
    expect(screen.getByText('App Management')).toBeOnTheScreen();

    expect(screen.getByTestId('dashboard-card-time')).toBeOnTheScreen();
    expect(screen.getByTestId('dashboard-card-money')).toBeOnTheScreen();
    expect(screen.getByTestId('dashboard-card-food')).toBeOnTheScreen();
    expect(screen.getByTestId('dashboard-card-app')).toBeOnTheScreen();
  });

  it('navigates to the Money tab when the Money Management card is pressed', async () => {
    const navigation = await renderScreen();

    fireEvent.press(screen.getByTestId('dashboard-card-money'));

    expect(navigation.navigate).toHaveBeenCalledWith('MoneyTab');
  });

  it('navigates to the Time tab when the Time Management card is pressed', async () => {
    const navigation = await renderScreen();

    fireEvent.press(screen.getByTestId('dashboard-card-time'));

    expect(navigation.navigate).toHaveBeenCalledWith('TimeTab');
  });

  it('opens the Dashboard Menu when the menu icon is pressed', async () => {
    const navigation = await renderScreen();

    fireEvent.press(screen.getByTestId('dashboard-menu-button'));

    expect(navigation.navigate).toHaveBeenCalledWith('DashboardMenu');
  });

  it('renders the Food and App cards without a navigation action', async () => {
    const navigation = await renderScreen();

    fireEvent.press(screen.getByTestId('dashboard-card-food'));
    fireEvent.press(screen.getByTestId('dashboard-card-app'));

    expect(navigation.navigate).not.toHaveBeenCalled();
  });
});
