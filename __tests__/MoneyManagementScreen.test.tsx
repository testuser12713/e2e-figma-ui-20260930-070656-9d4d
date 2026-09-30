import { fireEvent, render, screen } from '@testing-library/react-native';

import MoneyManagementScreen from '../src/screens/MoneyManagementScreen';

jest.mock('expo-font', () => ({
  useFonts: () => [true, null],
  loadAsync: () => Promise.resolve(),
  isLoaded: () => true,
}));

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));

jest.mock('expo-linear-gradient', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    LinearGradient: (props: any) => React.createElement(View, props),
  };
});

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();

function renderScreen() {
  return render(
    <MoneyManagementScreen
      navigation={{ navigate: mockNavigate, goBack: mockGoBack } as any}
      route={{ key: 'money-management', name: 'MoneyManagement' } as any}
    />,
  );
}

describe('MoneyManagementScreen', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    mockGoBack.mockClear();
  });

  it('renders the monthly expenses label and amount from sample data', async () => {
    await renderScreen();

    expect(screen.getByText('MontHly EXPENSES')).toBeOnTheScreen();
    expect(screen.getByText('1,345.00€')).toBeOnTheScreen();
  });

  it('renders the Quick Categories panel with its six categories', async () => {
    await renderScreen();

    expect(screen.getByText('Quick Categories')).toBeOnTheScreen();
    expect(screen.getByLabelText('Home')).toBeOnTheScreen();
    expect(screen.getByLabelText('Food')).toBeOnTheScreen();
    expect(screen.getByLabelText('Work')).toBeOnTheScreen();
    expect(screen.getByLabelText('Friends')).toBeOnTheScreen();
    expect(screen.getByLabelText('Shopping')).toBeOnTheScreen();
    expect(screen.getByLabelText('Gas')).toBeOnTheScreen();
  });

  it('navigates to the weekly report when the report block is pressed', async () => {
    await renderScreen();

    fireEvent.press(screen.getByTestId('money-report-button'));

    expect(mockNavigate).toHaveBeenCalledWith('MoneyManagement2');
  });

  it('navigates to the add form when the add button is pressed', async () => {
    await renderScreen();

    fireEvent.press(screen.getByTestId('money-add-button'));

    expect(mockNavigate).toHaveBeenCalledWith('MoneyManagement3');
  });
});
