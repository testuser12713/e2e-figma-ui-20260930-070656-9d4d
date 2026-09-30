import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { colors } from '../theme';

import DashboardMenuScreen from '../screens/DashboardMenuScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DashboardStatsScreen from '../screens/DashboardStatsScreen';
import MoneyManagement2Screen from '../screens/MoneyManagement2Screen';
import MoneyManagement3Screen from '../screens/MoneyManagement3Screen';
import MoneyManagementScreen from '../screens/MoneyManagementScreen';
import TimeManagement2Screen from '../screens/TimeManagement2Screen';
import TimeManagement3Screen from '../screens/TimeManagement3Screen';
import TimeManagementScreen from '../screens/TimeManagementScreen';

export type RootTabParamList = {
  DashboardTab: undefined;
  MoneyTab: undefined;
  TimeTab: undefined;
};

export type DashboardStackParamList = {
  Dashboard: undefined;
  DashboardStats: undefined;
  DashboardMenu: undefined;
};

export type MoneyStackParamList = {
  MoneyManagement: undefined;
  MoneyManagement2: undefined;
  MoneyManagement3: undefined;
};

export type TimeStackParamList = {
  TimeManagement: undefined;
  TimeManagement2: undefined;
  TimeManagement3: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const DashboardStack = createNativeStackNavigator<DashboardStackParamList>();
const MoneyStack = createNativeStackNavigator<MoneyStackParamList>();
const TimeStack = createNativeStackNavigator<TimeStackParamList>();

function DashboardStackNavigator() {
  return (
    <DashboardStack.Navigator screenOptions={{ headerShown: false }}>
      <DashboardStack.Screen name="Dashboard" component={DashboardScreen} />
      <DashboardStack.Screen name="DashboardStats" component={DashboardStatsScreen} />
      <DashboardStack.Screen name="DashboardMenu" component={DashboardMenuScreen} />
    </DashboardStack.Navigator>
  );
}

function MoneyStackNavigator() {
  return (
    <MoneyStack.Navigator screenOptions={{ headerShown: false }}>
      <MoneyStack.Screen name="MoneyManagement" component={MoneyManagementScreen} />
      <MoneyStack.Screen name="MoneyManagement2" component={MoneyManagement2Screen} />
      <MoneyStack.Screen name="MoneyManagement3" component={MoneyManagement3Screen} />
    </MoneyStack.Navigator>
  );
}

function TimeStackNavigator() {
  return (
    <TimeStack.Navigator screenOptions={{ headerShown: false }}>
      <TimeStack.Screen name="TimeManagement" component={TimeManagementScreen} />
      <TimeStack.Screen name="TimeManagement2" component={TimeManagement2Screen} />
      <TimeStack.Screen name="TimeManagement3" component={TimeManagement3Screen} />
    </TimeStack.Navigator>
  );
}

type IoniconName = keyof typeof Ionicons.glyphMap;

const TAB_ICONS: Record<keyof RootTabParamList, { active: IoniconName; inactive: IoniconName }> = {
  DashboardTab: { active: 'home', inactive: 'home-outline' },
  MoneyTab: { active: 'wallet', inactive: 'wallet-outline' },
  TimeTab: { active: 'time', inactive: 'time-outline' },
};

export function RootNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: colors.accent,
            tabBarInactiveTintColor: colors.navInactive,
            tabBarIcon: ({ focused, color, size }) => {
              const names = TAB_ICONS[route.name];
              return (
                <Ionicons
                  name={focused ? names.active : names.inactive}
                  size={size}
                  color={color}
                />
              );
            },
          })}
        >
          <Tab.Screen
            name="DashboardTab"
            component={DashboardStackNavigator}
            options={{
              title: 'Dashboard',
              tabBarButtonTestID: 'tab-dashboard',
              tabBarAccessibilityLabel: 'Dashboard',
            }}
          />
          <Tab.Screen
            name="MoneyTab"
            component={MoneyStackNavigator}
            options={{
              title: 'Money',
              tabBarButtonTestID: 'tab-money',
              tabBarAccessibilityLabel: 'Money',
            }}
          />
          <Tab.Screen
            name="TimeTab"
            component={TimeStackNavigator}
            options={{
              title: 'Time',
              tabBarButtonTestID: 'tab-time',
              tabBarAccessibilityLabel: 'Time',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
