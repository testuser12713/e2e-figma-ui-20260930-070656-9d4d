import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { MoneyStackParamList } from '../navigation/RootNavigator';
import { colors, fonts, radii, typography } from '../theme';
import type { Category } from '../types';

type Props = NativeStackScreenProps<MoneyStackParamList, 'MoneyManagement'>;

type IoniconName = keyof typeof Ionicons.glyphMap;

const MONTHLY_EXPENSES_LABEL = 'MontHly EXPENSES';
const MONTHLY_EXPENSES_AMOUNT = '1,345.00€';

const QUICK_CATEGORIES: Category[] = [
  { id: 'home', label: 'Home', icon: 'home-outline' },
  { id: 'food', label: 'Food', icon: 'restaurant-outline' },
  { id: 'work', label: 'Work', icon: 'briefcase-outline' },
  { id: 'friends', label: 'Friends', icon: 'people-outline' },
  { id: 'shopping', label: 'Shopping', icon: 'bag-handle-outline' },
  { id: 'gas', label: 'Gas', icon: 'car-outline' },
];

const FIRST_ROW = QUICK_CATEGORIES.slice(0, 3);
const SECOND_ROW = QUICK_CATEGORIES.slice(3, 6);

export default function MoneyManagementScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <View style={styles.hero}>
        <Image
          source={require('../../design/figma/assets/illustration-525x387.png')}
          style={styles.heroIllustration}
          accessibilityIgnoresInvertColors
        />

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Back"
          testID="money-back-button"
          onPress={() => navigation.goBack()}
          hitSlop={12}
          style={styles.backButton}
        >
          <Image
            source={require('../../design/figma/assets/noun-back-1227057.png')}
            style={styles.backIcon}
            accessibilityIgnoresInvertColors
          />
        </Pressable>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>R</Text>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Open weekly report"
          testID="money-report-button"
          onPress={() => navigation.navigate('MoneyManagement2')}
          style={styles.expensesBlock}
        >
          <Text style={styles.expensesLabel}>{MONTHLY_EXPENSES_LABEL}</Text>
          <Text style={styles.expensesAmount}>{MONTHLY_EXPENSES_AMOUNT}</Text>
        </Pressable>
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Quick Categories</Text>
        <View style={styles.grid}>
          <View style={styles.row}>
            {FIRST_ROW.map((category) => (
              <CategoryTile key={category.id} category={category} rounded />
            ))}
          </View>
          <View style={styles.row}>
            {SECOND_ROW.map((category) => (
              <CategoryTile key={category.id} category={category} />
            ))}
          </View>
        </View>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Add expense"
        testID="money-add-button"
        onPress={() => navigation.navigate('MoneyManagement3')}
        style={styles.fab}
      >
        <LinearGradient
          colors={[colors.accent, colors.accentDeep]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.fabGradient}
        >
          <View style={styles.fabPlusHorizontal} />
          <View style={styles.fabPlusVertical} />
        </LinearGradient>
      </Pressable>
    </View>
  );
}

function CategoryTile({ category, rounded = false }: { category: Category; rounded?: boolean }) {
  return (
    <View
      accessibilityLabel={category.label}
      style={[styles.tile, rounded ? styles.tileRounded : styles.tileSquare]}
    >
      <Ionicons name={category.icon as IoniconName} size={34} color={colors.fgBlack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
  },
  hero: {
    height: 406,
    width: '100%',
    backgroundColor: colors.surface,
    overflow: 'hidden',
  },
  heroIllustration: {
    position: 'absolute',
    top: -74,
    left: -73,
    width: 525,
    height: 387,
  },
  backButton: {
    position: 'absolute',
    top: 25,
    left: 22,
  },
  backIcon: {
    width: 11,
    height: 18,
  },
  avatar: {
    position: 'absolute',
    top: 77,
    right: 67,
    width: 51,
    height: 51,
    borderRadius: radii.pill,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.16,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  avatarText: {
    fontFamily: fonts.aleo700,
    fontSize: 32,
    lineHeight: 41,
    color: colors.onAccent,
  },
  expensesBlock: {
    position: 'absolute',
    top: 282,
    left: 49,
  },
  expensesLabel: {
    ...typography.sectionLabel,
    color: colors.fgBlack,
  },
  expensesAmount: {
    ...typography.heroNumber,
    color: colors.fgBlack,
  },
  panel: {
    position: 'absolute',
    top: 453,
    left: 45,
    width: 330,
    height: 276,
    backgroundColor: colors.surface,
    borderRadius: radii.panel,
    alignItems: 'center',
    paddingTop: 34,
  },
  panelTitle: {
    ...typography.sectionLabel,
    color: colors.fgBlack,
  },
  grid: {
    marginTop: 28,
    width: 282,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tile: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: colors.fgBlack,
    borderStyle: 'dashed',
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 36,
  },
  tileRounded: {
    borderRadius: radii.fieldNote,
  },
  tileSquare: {
    borderRadius: radii.square,
  },
  fab: {
    position: 'absolute',
    bottom: 8,
    left: '50%',
    marginLeft: -32,
    width: 64,
    height: 63,
    borderRadius: radii.pill,
    shadowColor: '#000000',
    shadowOpacity: 0.16,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
    overflow: 'hidden',
  },
  fabGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: colors.surface,
    borderRadius: radii.pill,
  },
  fabPlusHorizontal: {
    position: 'absolute',
    width: 20,
    height: 3,
    backgroundColor: colors.onAccent,
  },
  fabPlusVertical: {
    position: 'absolute',
    width: 3,
    height: 20,
    backgroundColor: colors.onAccent,
  },
});
