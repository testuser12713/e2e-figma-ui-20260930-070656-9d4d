import { fireEvent, render, screen } from '@testing-library/react-native';

import TimeManagement2Screen from '../src/screens/TimeManagement2Screen';

const createNavigation = () => ({
  goBack: jest.fn(),
});

async function renderScreen() {
  const navigation = createNavigation();
  await render(<TimeManagement2Screen navigation={navigation as never} route={{} as never} />);
  return navigation;
}

describe('TimeManagement2Screen', () => {
  it('renders the calendar title, week range and tappable days', async () => {
    await render(<TimeManagement2Screen navigation={createNavigation() as never} route={{} as never} />);

    expect(screen.getByText('My Appointments')).toBeOnTheScreen();
    expect(screen.getByText('15-21 April 2019')).toBeOnTheScreen();
    for (const day of [15, 16, 17, 18, 19, 20, 21]) {
      expect(screen.getByTestId(`day-${day}`)).toBeOnTheScreen();
    }
  });

  it('selects a day when it is pressed', async () => {
    await render(<TimeManagement2Screen navigation={createNavigation() as never} route={{} as never} />);

    fireEvent.press(screen.getByTestId('day-20'));

    expect(await screen.findByText('20 April 2019')).toBeOnTheScreen();
  });

  it('navigates back when the back button is pressed', async () => {
    const navigation = await renderScreen();

    fireEvent.press(screen.getByTestId('back-button'));

    expect(navigation.goBack).toHaveBeenCalled();
  });
});
