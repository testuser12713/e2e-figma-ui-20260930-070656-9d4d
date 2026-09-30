import { fireEvent, render, screen } from '@testing-library/react-native';

import DashboardStatsScreen from '../src/screens/DashboardStatsScreen';

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));

describe('DashboardStatsScreen', () => {
  const navigation = { goBack: jest.fn() } as any;

  it('renders the statistics heading, period and sample values', async () => {
    await render(<DashboardStatsScreen navigation={navigation} route={{} as any} />);

    expect(screen.getByText('Statistics')).toBeOnTheScreen();
    expect(screen.getByText('Since 21. Dec')).toBeOnTheScreen();
    expect(screen.getByText('Dec 2024 - Jan 2024')).toBeOnTheScreen();
    expect(screen.getByText('20 DAYS')).toBeOnTheScreen();
    expect(screen.getByText('Top Run: 20 Days')).toBeOnTheScreen();
    expect(screen.getByText('Restarts: 4')).toBeOnTheScreen();
  });

  it('renders the month letters and the 60 axis value', async () => {
    await render(<DashboardStatsScreen navigation={navigation} route={{} as any} />);

    expect(screen.getAllByText('M').length).toBeGreaterThan(0);
    expect(screen.getAllByText('D').length).toBeGreaterThan(0);
    expect(screen.getByText('60')).toBeOnTheScreen();
    expect(screen.getByText('90')).toBeOnTheScreen();
  });

  it('navigates back when the back button is pressed', async () => {
    await render(<DashboardStatsScreen navigation={navigation} route={{} as any} />);

    fireEvent.press(screen.getByTestId('stats-back'));

    expect(navigation.goBack).toHaveBeenCalled();
  });
});
