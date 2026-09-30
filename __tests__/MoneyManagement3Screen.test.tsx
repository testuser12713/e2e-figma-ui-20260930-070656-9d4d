import { act, fireEvent, render, screen } from '@testing-library/react-native';

import MoneyManagement3Screen from '../src/screens/MoneyManagement3Screen';

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));

const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
} as unknown as Parameters<typeof MoneyManagement3Screen>[0]['navigation'];

const renderScreen = () =>
  render(
    <MoneyManagement3Screen navigation={navigation} route={{ key: 'x', name: 'MoneyManagement3' } as never} />
  );

describe('MoneyManagement3Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Add Expense form fields and button', async () => {
    await renderScreen();

    expect(screen.getByTestId('input-name')).toBeOnTheScreen();
    expect(screen.getByTestId('input-description')).toBeOnTheScreen();
    expect(screen.getByTestId('input-amount')).toBeOnTheScreen();
    expect(screen.getByTestId('input-category')).toBeOnTheScreen();
    expect(screen.getByTestId('input-date')).toBeOnTheScreen();
    expect(screen.getByTestId('add-expense')).toBeOnTheScreen();
  });

  it('opens the category picker and selects a category', async () => {
    await renderScreen();

    await act(async () => {
      fireEvent.press(screen.getByTestId('input-category'));
    });

    expect(screen.getByTestId('category-option-home')).toBeOnTheScreen();
    expect(screen.getByTestId('category-option-food')).toBeOnTheScreen();

    await act(async () => {
      fireEvent.press(screen.getByTestId('category-option-food'));
    });

    expect(screen.getByText('Food')).toBeOnTheScreen();
  });

  it('returns to the Money overview when Add Expense is pressed', async () => {
    await renderScreen();

    fireEvent.press(screen.getByTestId('add-expense'));

    expect(navigation.navigate).toHaveBeenCalledWith('MoneyManagement');
  });

  it('goes back when the back button is pressed', async () => {
    await renderScreen();

    fireEvent.press(screen.getByTestId('back-button'));

    expect(navigation.goBack).toHaveBeenCalled();
  });
});
