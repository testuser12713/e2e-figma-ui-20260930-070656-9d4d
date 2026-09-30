import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';

import TimeManagementScreen from '../src/screens/TimeManagementScreen';

jest.mock('expo-font', () => ({
  useFonts: () => [true, null],
  loadAsync: () => Promise.resolve(),
  isLoaded: () => true,
}));

jest.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));

const navigate = jest.fn();
const goBack = jest.fn();
const parentNavigate = jest.fn();

const props = {
  navigation: { navigate, goBack, getParent: () => ({ navigate: parentNavigate }) },
  route: { key: 'TimeManagement', name: 'TimeManagement', params: undefined },
} as never;

describe('TimeManagementScreen', () => {
  beforeEach(() => {
    navigate.mockClear();
    goBack.mockClear();
    parentNavigate.mockClear();
  });

  it('renders the title and the search field', async () => {
    await render(<TimeManagementScreen {...(props as any)} />);

    expect(screen.getByText('My Appointments')).toBeOnTheScreen();
    expect(screen.getByTestId('search-input')).toBeOnTheScreen();
  });

  it('lists the sample upcoming appointments', async () => {
    await render(<TimeManagementScreen {...(props as any)} />);

    expect(screen.getByText('Dentist - Clara Odding')).toBeOnTheScreen();
    expect(screen.getByText('Cardiologist - Steven Pauliner')).toBeOnTheScreen();
    expect(screen.getByText('Dermatologist - Noemi Shinte')).toBeOnTheScreen();
  });

  it('opens the appointment form when "Add a new appointment" is pressed', async () => {
    await render(<TimeManagementScreen {...(props as any)} />);

    fireEvent.press(screen.getByTestId('add-appointment'));

    expect(navigate).toHaveBeenCalledWith('TimeManagement3');
  });

  it('opens the appointment form when "Modify" is pressed', async () => {
    await render(<TimeManagementScreen {...(props as any)} />);

    fireEvent.press(screen.getByTestId('modify-1'));

    expect(navigate).toHaveBeenCalledWith('TimeManagement3');
  });

  it('shows no appointments when the Past tab is active', async () => {
    await render(<TimeManagementScreen {...(props as any)} />);

    fireEvent.press(screen.getByTestId('tab-past'));

    await waitFor(() => {
      expect(screen.queryByText('Dentist - Clara Odding')).toBeNull();
    });
  });

  it('opens the menu when the profile icon is pressed', async () => {
    await render(<TimeManagementScreen {...(props as any)} />);

    fireEvent.press(screen.getByTestId('profile-button'));

    expect(parentNavigate).toHaveBeenCalledWith('DashboardTab', { screen: 'DashboardMenu' });
  });

  it('does not render an Overview button', async () => {
    await render(<TimeManagementScreen {...(props as any)} />);

    expect(screen.queryByTestId('overview-button')).toBeNull();
    expect(screen.queryByText('Overview')).toBeNull();
  });
});
