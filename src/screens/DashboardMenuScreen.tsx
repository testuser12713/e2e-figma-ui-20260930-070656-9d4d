import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import type {
  DashboardStackParamList,
  RootTabParamList,
} from '../navigation/RootNavigator';
import { colors, radii, typography } from '../theme';

type Props = NativeStackScreenProps<DashboardStackParamList, 'DashboardMenu'>;

const ASSETS = '../../design/figma/assets';

const SHADOW_HEADER = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.1,
  shadowRadius: 16,
  elevation: 3,
};

const SHADOW_SURFACE = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.08,
  shadowRadius: 16,
  elevation: 3,
};

const SHADOW_DRAWER = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.16,
  shadowRadius: 16,
  elevation: 6,
};

export default function DashboardMenuScreen({ navigation }: Props) {
  const goToTab = (tab: keyof RootTabParamList) => {
    navigation
      .getParent<BottomTabNavigationProp<RootTabParamList>>()
      ?.navigate(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="menu"
          size={18}
          color={colors.chevron}
          style={styles.headerMenuIcon}
        />
        <Text style={styles.headerTitle}>Dashboard</Text>
        <Ionicons
          name="person-circle-outline"
          size={27}
          color={colors.chevron}
          style={styles.headerUserIcon}
        />
      </View>

      <View style={styles.search}>
        <Text style={styles.searchPlaceholder}>Search</Text>
        <Ionicons name="search" size={16} color={colors.fgStrong} />
      </View>

      <Pressable
        style={[styles.card, styles.cardTime]}
        accessibilityRole="button"
        testID="card-time-management"
        onPress={() => goToTab('TimeTab')}
      >
        <Text style={styles.cardTitle}>Time Management</Text>
        <Image
          source={require(`${ASSETS}/illustration-128x114.png`)}
          style={styles.cardTimeIllustration}
        />
      </Pressable>

      <Pressable
        style={[styles.card, styles.cardMoney]}
        accessibilityRole="button"
        testID="card-money-management"
        onPress={() => goToTab('MoneyTab')}
      >
        <Text style={styles.cardTitle}>Money Management</Text>
        <Image
          source={require(`${ASSETS}/illustration-118x109.png`)}
          style={styles.cardMoneyIllustration}
        />
      </Pressable>

      <Pressable
        style={[styles.card, styles.cardFood]}
        accessibilityRole="button"
        testID="card-food-management"
      >
        <Text style={styles.cardTitle}>Food Management</Text>
        <Image
          source={require(`${ASSETS}/undraw-personal-site-xyd1.png`)}
          style={styles.cardFoodIllustration}
        />
      </Pressable>

      <Pressable
        style={[styles.card, styles.cardApp]}
        accessibilityRole="button"
        testID="card-app-management"
      >
        <Text style={styles.cardTitle}>App Management</Text>
        <Image
          source={require(`${ASSETS}/illustration-120x133.png`)}
          style={styles.cardAppIllustration}
        />
      </Pressable>

      <View style={styles.overlay} pointerEvents="none" />

      <View style={styles.drawerPanel} />
      <View style={styles.drawerHeader} />
      <Image
        source={require(`${ASSETS}/profile-image.png`)}
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>Sophie Garnier</Text>
      <Text style={styles.profileLocation}>Luxembourg</Text>
      <Image
        source={require(`${ASSETS}/icon-13x13.png`)}
        style={styles.profileIcon}
      />

      <Pressable
        style={[styles.menuItem, styles.menuStatistics]}
        accessibilityRole="button"
        testID="menu-statistics"
        onPress={() => navigation.navigate('DashboardStats')}
      >
        <Ionicons name="stats-chart" size={19} color={colors.fg} />
        <Text style={[styles.menuLabel, styles.menuStatisticsLabel]}>
          Statistics
        </Text>
      </Pressable>

      <Pressable
        style={[styles.menuItem, styles.menuAccount]}
        accessibilityRole="button"
        testID="menu-account-settings"
      >
        <Image
          source={require(`${ASSETS}/noun-user-1335326-19x19.png`)}
          style={styles.menuAccountIcon}
        />
        <Text style={[styles.menuLabel, styles.menuAccountLabel]}>
          Account Settings
        </Text>
      </Pressable>

      <Pressable
        style={[styles.menuItem, styles.menuHelp]}
        accessibilityRole="button"
        testID="menu-help"
      >
        <Image
          source={require(`${ASSETS}/noun-info-1174604-17x17.png`)}
          style={styles.menuHelpIcon}
        />
        <Text style={[styles.menuLabel, styles.menuHelpLabel]}>Help</Text>
      </Pressable>

      <Pressable
        style={[styles.menuItem, styles.menuLogout]}
        accessibilityRole="button"
        testID="menu-logout"
      >
        <Ionicons name="log-out" size={18} color={colors.fg} />
        <Text style={[styles.menuLabel, styles.menuLogoutLabel]}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    overflow: 'hidden',
  },

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 414,
    height: 126,
    backgroundColor: colors.surface,
    ...SHADOW_HEADER,
  },
  headerMenuIcon: {
    position: 'absolute',
    left: 20,
    top: 33,
  },
  headerTitle: {
    position: 'absolute',
    left: 18,
    top: 62,
    ...typography.screenTitle,
    color: colors.fg,
  },
  headerUserIcon: {
    position: 'absolute',
    left: 367,
    top: 25,
    width: 27,
    height: 27,
  },

  search: {
    position: 'absolute',
    left: 40,
    top: 165,
    width: 334,
    height: 43,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    ...SHADOW_SURFACE,
  },
  searchPlaceholder: {
    ...typography.text16Alt,
    color: colors.fgStrong,
    opacity: 0.2,
  },

  card: {
    position: 'absolute',
    width: 157,
    height: 280,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    ...SHADOW_SURFACE,
  },
  cardTitle: {
    position: 'absolute',
    left: 15,
    top: 19,
    ...typography.text16,
    color: colors.fg,
  },
  cardTime: { left: 40, top: 245 },
  cardMoney: { left: 218, top: 245 },
  cardFood: { left: 218, top: 545 },
  cardApp: { left: 39, top: 545 },

  cardTimeIllustration: {
    position: 'absolute',
    left: 15,
    top: 93,
    width: 128,
    height: 114,
  },
  cardMoneyIllustration: {
    position: 'absolute',
    left: 19,
    top: 101,
    width: 118,
    height: 109,
  },
  cardFoodIllustration: {
    position: 'absolute',
    left: 32,
    top: 91,
    width: 88,
    height: 130,
  },
  cardAppIllustration: {
    position: 'absolute',
    left: 15,
    top: 85,
    width: 120,
    height: 133,
  },

  overlay: {
    position: 'absolute',
    top: -1,
    left: 0,
    width: 414,
    height: 898,
    backgroundColor: '#000000',
    opacity: 0.4,
  },

  drawerPanel: {
    position: 'absolute',
    left: 0,
    top: -114,
    width: 294,
    height: 1010,
    backgroundColor: colors.surface,
    ...SHADOW_DRAWER,
  },
  drawerHeader: {
    position: 'absolute',
    left: 1,
    top: -1,
    width: 294,
    height: 208,
    backgroundColor: colors.accent,
  },

  profileImage: {
    position: 'absolute',
    left: 23,
    top: 87,
    width: 75,
    height: 75,
  },
  profileName: {
    position: 'absolute',
    left: 106,
    top: 100,
    ...typography.text16,
    color: colors.fg,
  },
  profileLocation: {
    position: 'absolute',
    left: 106,
    top: 126,
    ...typography.text14Alt,
    color: colors.fg,
  },
  profileIcon: {
    position: 'absolute',
    left: 260,
    top: 87,
    width: 13,
    height: 13,
  },

  menuItem: {
    position: 'absolute',
    height: 21,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuLabel: {
    ...typography.text14,
    color: colors.fg,
    opacity: 0.6,
  },
  menuStatistics: { left: 24, top: 246 },
  menuStatisticsLabel: { marginLeft: 7 },
  menuAccount: { left: 24, top: 301 },
  menuAccountIcon: { width: 19, height: 19 },
  menuAccountLabel: { marginLeft: 7 },
  menuHelp: { left: 26, top: 357 },
  menuHelpIcon: { width: 17, height: 17 },
  menuHelpLabel: { marginLeft: 6 },
  menuLogout: { left: 22, top: 836 },
  menuLogoutLabel: { marginLeft: 7 },
});
