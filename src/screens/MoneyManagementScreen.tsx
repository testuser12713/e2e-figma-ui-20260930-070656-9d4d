import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
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

interface Transaction {
  id: string;
  category: string;
  description: string;
  date: string;
  amount: string;
  icon: IoniconName;
  iconColor: string;
}

const RECENT_TRANSACTIONS: Transaction[] = [
  {
    id: 'salary',
    category: 'Income',
    description: 'Monthly payroll deposit',
    date: '10 Apr',
    amount: '+2,450.00€',
    icon: 'swap-vertical',
    iconColor: colors.accentDeep,
  },
  {
    id: 'groceries',
    category: 'Groceries',
    description: 'Weekly supermarket run',
    date: '12 Apr',
    amount: '-48.20€',
    icon: 'restaurant',
    iconColor: colors.fg,
  },
  {
    id: 'rent',
    category: 'Housing',
    description: 'Apartment rent',
    date: '01 Apr',
    amount: '-890.00€',
    icon: 'home',
    iconColor: colors.fg,
  },
  {
    id: 'coffee',
    category: 'Food',
    description: 'Café coffee',
    date: '11 Apr',
    amount: '-4.50€',
    icon: 'cafe',
    iconColor: colors.fg,
  },
];

export default function MoneyManagementScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
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

          <Text style={styles.expensesLabel}>{MONTHLY_EXPENSES_LABEL}</Text>
          <Text style={styles.expensesAmount}>{MONTHLY_EXPENSES_AMOUNT}</Text>

          <View style={styles.heroArc} />
        </View>

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Quick Categories</Text>
          <View style={styles.grid}>
            <View style={styles.row}>
              {FIRST_ROW.map((category) => (
                <CategoryTile
                  key={category.id}
                  category={category}
                  rounded
                  onPress={() => navigation.navigate('MoneyManagement3')}
                />
              ))}
            </View>
            <View style={styles.row}>
              {SECOND_ROW.map((category) => (
                <CategoryTile
                  key={category.id}
                  category={category}
                  onPress={() => navigation.navigate('MoneyManagement3')}
                />
              ))}
            </View>
          </View>
        </View>

        <Text style={styles.txTitle}>Recent Transactions</Text>

        <View style={styles.txList}>
          {RECENT_TRANSACTIONS.map((transaction) => (
            <TransactionRow
              key={transaction.id}
              transaction={transaction}
              onPress={() => navigation.navigate('MoneyManagement2')}
            />
          ))}
        </View>
      </ScrollView>

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

function CategoryTile({
  category,
  rounded = false,
  onPress,
}: {
  category: Category;
  rounded?: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={category.label}
      testID={`cat-${category.id}`}
      onPress={onPress}
      style={({ pressed }) => [
        styles.tile,
        rounded ? styles.tileRounded : styles.tileSquare,
        pressed && styles.tilePressed,
      ]}
    >
      <Ionicons name={category.icon as IoniconName} size={34} color={colors.fgBlack} />
    </Pressable>
  );
}

function TransactionRow({
  transaction,
  onPress,
}: {
  transaction: Transaction;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${transaction.category}: ${transaction.description}`}
      testID={`tx-row-${transaction.id}`}
      onPress={onPress}
      style={({ pressed }) => [styles.txRow, pressed && styles.txRowPressed]}
    >
      <View style={styles.txIll}>
        <Ionicons name={transaction.icon} size={26} color={transaction.iconColor} />
      </View>
      <View style={styles.txCol}>
        <Text style={styles.txCat}>{transaction.category}</Text>
        <Text style={styles.txDesc}>{transaction.description}</Text>
        <Text style={styles.txDate}>{transaction.date}</Text>
      </View>
      <Text style={styles.txAmount}>{transaction.amount}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollContent: {
    paddingBottom: 20,
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
  heroArc: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -1,
    height: 60,
    backgroundColor: colors.bg,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
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
    right: 41,
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
  expensesLabel: {
    position: 'absolute',
    top: 282,
    left: 49,
    ...typography.sectionLabel,
    color: colors.fgBlack,
  },
  expensesAmount: {
    position: 'absolute',
    top: 298,
    left: 49,
    ...typography.heroNumber,
    color: colors.fgBlack,
  },
  panel: {
    width: 330,
    alignSelf: 'center',
    marginTop: -40,
    backgroundColor: colors.surface,
    borderRadius: radii.panel,
    padding: 24,
  },
  panelTitle: {
    ...typography.sectionLabel,
    color: colors.fgBlack,
    textAlign: 'center',
    marginBottom: 22,
  },
  grid: {
    width: '100%',
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
    marginBottom: 22,
  },
  tileRounded: {
    borderRadius: radii.fieldNote,
  },
  tileSquare: {
    borderRadius: radii.square,
  },
  tilePressed: {
    backgroundColor: colors.bg,
  },
  txTitle: {
    ...typography.sectionLabel,
    color: colors.fgBlack,
    marginTop: 28,
    marginHorizontal: 39,
  },
  txList: {
    marginTop: 14,
    marginHorizontal: 39,
  },
  txRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 83,
    paddingHorizontal: 12,
    borderRadius: radii.lg,
  },
  txRowPressed: {
    backgroundColor: colors.bg,
  },
  txIll: {
    width: 53,
    height: 53,
    borderRadius: radii.xl,
    backgroundColor: colors.bgTint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txCol: {
    flex: 1,
    marginLeft: 16,
  },
  txCat: {
    fontFamily: fonts.inter100,
    fontSize: 9,
    lineHeight: 11,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
    color: colors.fgBlack,
  },
  txDesc: {
    marginTop: 4,
    fontFamily: fonts.inter100,
    fontSize: 12,
    lineHeight: 15,
    color: colors.fgBlack,
  },
  txDate: {
    marginTop: 5,
    fontFamily: fonts.inter100,
    fontSize: 9,
    lineHeight: 11,
    textTransform: 'uppercase',
    color: colors.fgBlack,
  },
  txAmount: {
    fontFamily: fonts.inter100,
    fontSize: 14,
    lineHeight: 18,
    color: colors.fgBlack,
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
