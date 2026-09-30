import { fireEvent, render, screen } from '@testing-library/react-native';

import TimeManagement3Screen from '../src/screens/TimeManagement3Screen';

jest.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));

const mockGoBack = jest.fn();

const navigation = {
  goBack: mockGoBack,
  navigate: jest.fn(),
} as never;

const route = {} as never;

describe('TimeManagement3Screen', () => {
  beforeEach(() => {
    mockGoBack.mockClear();
  });

  it('renders the appointment form with fields, button and quick adds', async () => {
    await render(<TimeManagement3Screen navigation={navigation} route={route} />);

    expect(screen.getByText('Add an appointment')).toBeOnTheScreen();
    expect(screen.getByTestId('time3-name-input')).toBeOnTheScreen();
    expect(screen.getByTestId('time3-description-input')).toBeOnTheScreen();
    expect(screen.getByTestId('time3-date-input')).toBeOnTheScreen();
    expect(screen.getByText('Add Appointment')).toBeOnTheScreen();
    expect(screen.getByText('Quick Adds')).toBeOnTheScreen();
    expect(screen.getByText('Gym')).toBeOnTheScreen();
    expect(screen.getByText('Work')).toBeOnTheScreen();
    expect(screen.getByText('Birthday')).toBeOnTheScreen();
    expect(screen.getByText('Dr. Jeff Smiths')).toBeOnTheScreen();
  });

  it('fills the name and description when a quick add is pressed', async () => {
    await render(<TimeManagement3Screen navigation={navigation} route={route} />);

    fireEvent.press(screen.getByTestId('quick-add-gym'));

    expect(await screen.findByDisplayValue('Gym')).toBeOnTheScreen();
    expect(screen.getByDisplayValue('Customize Plan')).toBeOnTheScreen();
  });

  it('navigates back to the list when Add Appointment is pressed', async () => {
    await render(<TimeManagement3Screen navigation={navigation} route={route} />);

    fireEvent.press(screen.getByTestId('time3-add-appointment'));

    expect(mockGoBack).toHaveBeenCalled();
  });

  it('navigates back when the header back button is pressed', async () => {
    await render(<TimeManagement3Screen navigation={navigation} route={route} />);

    fireEvent.press(screen.getByTestId('time3-back-button'));

    expect(mockGoBack).toHaveBeenCalled();
  });

  it('exposes accessible back and profile header controls', async () => {
    await render(<TimeManagement3Screen navigation={navigation} route={route} />);

    expect(screen.getByRole('button', { name: 'Back' })).toBeOnTheScreen();
    expect(screen.getByRole('button', { name: 'Profile' })).toBeOnTheScreen();

    fireEvent.press(screen.getByTestId('time3-user-button'));
  });
});
