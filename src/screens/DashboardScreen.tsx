import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Image,
  ImageStyle,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import type { DashboardStackParamList, RootTabParamList } from '../navigation/RootNavigator';
import { colors, radii, typography } from '../theme';

type Props = CompositeScreenProps<
  NativeStackScreenProps<DashboardStackParamList, 'Dashboard'>,
  BottomTabScreenProps<RootTabParamList, 'DashboardTab'>
>;

const TIME_ILLUSTRATION = require('../../design/figma/assets/illustration-128x114.png');
const MONEY_ILLUSTRATION = require('../../design/figma/assets/illustration-118x109.png');
const FOOD_ILLUSTRATION = require('../../design/figma/assets/undraw-personal-site-xyd1.png');
const APP_ILLUSTRATION = require('../../design/figma/assets/illustration-120x133.png');
const USER_ICON = require('../../design/figma/assets/noun-user-1335326.png');
const SEARCH_ICON = require('../../design/figma/assets/search-1.png');
const MENU_ICON = require('../../design/figma/assets/noun-menu-933312.png');

type CardProps = {
  testID: string;
  label: string;
  title: string;
  image: number;
  imageStyle: ImageStyle;
  onPress?: () => void;
};

function MenuCard({ testID, label, title, image, imageStyle, onPress }: CardProps) {
  const content = (
    <>
      <Text style={styles.cardTitle}>{title}</Text>
      <Image source={image} style={imageStyle} resizeMode="contain" />
    </>
  );

  if (onPress) {
    return (
      <Pressable
        testID={testID}
        accessibilityRole="button"
        accessibilityLabel={label}
        onPress={onPress}
        style={styles.card}
      >
        {content}
      </Pressable>
    );
  }

  return (
    <View testID={testID} style={styles.card}>
      {content}
    </View>
  );
}

export default function DashboardScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} bounces={false}>
        <View style={styles.header}>
          <Pressable
            testID="dashboard-menu-button"
            accessibilityRole="button"
            accessibilityLabel="Open menu"
            onPress={() => navigation.navigate('DashboardMenu')}
            style={styles.menuButton}
            hitSlop={10}
          >
            <Image source={MENU_ICON} style={styles.menuIcon} resizeMode="contain" />
          </Pressable>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <Image source={USER_ICON} style={styles.userIcon} resizeMode="contain" />
        </View>

        <View style={styles.search}>
          <TextInput
            testID="dashboard-search"
            accessibilityLabel="Search"
            placeholder="Search"
            placeholderTextColor="#1C1C1C33"
            style={styles.searchInput}
          />
          <Image source={SEARCH_ICON} style={styles.searchIcon} resizeMode="contain" />
        </View>

        <View style={styles.grid}>
          <MenuCard
            testID="dashboard-card-time"
            label="Time Management"
            title="Time Management"
            image={TIME_ILLUSTRATION}
            imageStyle={styles.imageTime}
            onPress={() => navigation.navigate('TimeTab')}
          />
          <MenuCard
            testID="dashboard-card-money"
            label="Money Management"
            title="Money Management"
            image={MONEY_ILLUSTRATION}
            imageStyle={styles.imageMoney}
            onPress={() => navigation.navigate('MoneyTab')}
          />
          <MenuCard
            testID="dashboard-card-food"
            label="Food Management"
            title="Food Management"
            image={FOOD_ILLUSTRATION}
            imageStyle={styles.imageFood}
          />
          <MenuCard
            testID="dashboard-card-app"
            label="App Management"
            title="App Management"
            image={APP_ILLUSTRATION}
            imageStyle={styles.imageApp}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const shadow = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 3 },
  shadowRadius: 16,
  elevation: 3,
} as const;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    paddingBottom: 24,
  },
  header: {
    height: 126,
    backgroundColor: colors.accent,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 3,
  },
  menuButton: {
    position: 'absolute',
    left: 20,
    top: 33,
    width: 18,
    height: 15,
  },
  menuIcon: {
    width: 18,
    height: 15,
  },
  headerTitle: {
    ...typography.screenTitle,
    position: 'absolute',
    left: 18,
    top: 62,
    color: colors.onAccent,
  },
  userIcon: {
    position: 'absolute',
    left: 367,
    top: 25,
    width: 27,
    height: 27,
  },
  search: {
    marginTop: 39,
    marginLeft: 40,
    width: 334,
    height: 43,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    ...shadow,
    shadowOpacity: 0.08,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 16,
    ...typography.text16Alt,
    color: colors.fgStrong,
  },
  searchIcon: {
    position: 'absolute',
    right: 14,
    top: 13,
    width: 16,
    height: 16,
  },
  grid: {
    marginTop: 37,
    marginLeft: 40,
    marginRight: 39,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 20,
  },
  card: {
    width: 157,
    height: 280,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    ...shadow,
    shadowOpacity: 0.08,
  },
  cardTitle: {
    ...typography.text16,
    position: 'absolute',
    left: 15,
    top: 19,
    width: 129,
    color: colors.fg,
  },
  imageTime: {
    position: 'absolute',
    left: 15,
    top: 93,
    width: 128,
    height: 114,
  },
  imageMoney: {
    position: 'absolute',
    left: 19,
    top: 101,
    width: 118,
    height: 109,
  },
  imageFood: {
    position: 'absolute',
    left: 32,
    top: 91,
    width: 88,
    height: 130,
  },
  imageApp: {
    position: 'absolute',
    left: 15,
    top: 85,
    width: 120,
    height: 133,
  },
});
