import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import type { MoneyStackParamList } from '../navigation/RootNavigator';
import { colors, fonts, radii, typography } from '../theme';

type TransactionIcon = 'income' | 'groceries' | 'food' | 'transport' | 'housing';

interface Transaction {
  id: string;
  category: string;
  description: string;
  date: string;
  amount: string;
  icon: TransactionIcon;
}

const TRANSACTIONS: Transaction[] = [
  {
    id: 'salary',
    category: 'Income',
    description: 'Monthly payroll deposit',
    date: '10 Apr',
    amount: '+2,450.00€',
    icon: 'income',
  },
  {
    id: 'groceries',
    category: 'Groceries',
    description: 'Weekly supermarket run',
    date: '12 Apr',
    amount: '-48.20€',
    icon: 'groceries',
  },
  {
    id: 'coffee',
    category: 'Food',
    description: 'Café coffee',
    date: '11 Apr',
    amount: '-4.50€',
    icon: 'food',
  },
  {
    id: 'transport',
    category: 'Transport',
    description: 'Train ticket',
    date: '09 Apr',
    amount: '-12.80€',
    icon: 'transport',
  },
  {
    id: 'rent',
    category: 'Housing',
    description: 'Apartment rent',
    date: '01 Apr',
    amount: '-890.00€',
    icon: 'housing',
  },
];

function TransactionGlyph({ icon }: { icon: TransactionIcon }) {
  const stroke = icon === 'income' ? colors.accentDeep : colors.fg;
  return (
    <Svg width={26} height={26} viewBox="0 0 24 24" fill="none">
      {icon === 'income' && (
        <Path
          d="M12 3v18M7 7l5-4 5 4M7 17l5 4 5-4"
          stroke={stroke}
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {icon === 'groceries' && (
        <>
          <Path
            d="M4 4h2l2 10h9l2-7H8"
            stroke={stroke}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Circle cx={9} cy={18} r={1.5} stroke={stroke} strokeWidth={1.8} />
          <Circle cx={17} cy={18} r={1.5} stroke={stroke} strokeWidth={1.8} />
        </>
      )}
      {icon === 'food' && (
        <>
          <Path
            d="M5 9h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z"
            stroke={stroke}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M16 10h2a2.5 2.5 0 0 1 0 5h-2"
            stroke={stroke}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {icon === 'transport' && (
        <>
          <Path
            d="M4 16l1.5-5h13L20 16"
            stroke={stroke}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Rect
            x={4}
            y={16}
            width={16}
            height={4}
            rx={1.5}
            stroke={stroke}
            strokeWidth={1.8}
          />
          <Circle cx={8} cy={20} r={1.4} stroke={stroke} strokeWidth={1.8} />
          <Circle cx={16} cy={20} r={1.4} stroke={stroke} strokeWidth={1.8} />
        </>
      )}
      {icon === 'housing' && (
        <>
          <Path
            d="M3 11l9-8 9 8"
            stroke={stroke}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M5 9.5V21h14V9.5"
            stroke={stroke}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </Svg>
  );
}

type Props = NativeStackScreenProps<MoneyStackParamList, 'MoneyManagement2'>;

export default function MoneyManagement2Screen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 26 }]} testID="money-2-header">
        <View style={styles.headerLeft}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Back"
            testID="money-2-back"
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
            hitSlop={8}
          >
            <Svg width={11} height={18} viewBox="0 0 11 18" fill="none">
              <Path
                d="M9.5 1L2 9l7.5 8"
                stroke={colors.chevron}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </Pressable>
          <Text style={styles.headerTitle} testID="money-2-title">
            Transactions
          </Text>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Profile"
          testID="money-2-user"
          style={styles.iconButton}
          hitSlop={8}
        >
          <Svg width={27} height={27} viewBox="0 0 24 24" fill="none">
            <Circle cx={12} cy={8} r={4} stroke={colors.chevron} strokeWidth={2} />
            <Path
              d="M4 21c0-4 3.6-6 8-6s8 2 8 6"
              stroke={colors.chevron}
              strokeWidth={2}
              strokeLinecap="round"
            />
          </Svg>
        </Pressable>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
      >
        <View style={styles.inner}>
          <View style={styles.searchWrap} testID="money-2-search">
            <View style={styles.field}>
              <View style={styles.fieldIcon}>
                <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                  <Circle cx={11} cy={11} r={7} stroke={colors.fg} strokeWidth={2} />
                  <Path
                    d="M21 21l-4.3-4.3"
                    stroke={colors.fg}
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </Svg>
              </View>
              <TextInput
                style={styles.fieldInput}
                placeholder="Search"
                placeholderTextColor="#1C1C1C33"
                testID="money-2-search-input"
                accessibilityLabel="Search transactions"
              />
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Category filter"
              testID="money-2-category-filter"
              style={[styles.field, styles.fieldSpacing]}
            >
              <View style={styles.fieldIcon}>
                <Svg width={15} height={16} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 0 1 16 0Z"
                    stroke={colors.fg}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Circle cx={12} cy={10} r={2.6} stroke={colors.fg} strokeWidth={2} />
                </Svg>
              </View>
              <Text style={styles.fieldText}>All categories</Text>
            </Pressable>
          </View>

          <Text style={styles.sectionLabel} testID="money-2-list-title">
            This month
          </Text>

          <View testID="money-2-tx-list">
            {TRANSACTIONS.map((tx) => (
              <Pressable
                key={tx.id}
                accessibilityRole="button"
                accessibilityLabel={`${tx.category}, ${tx.description}`}
                testID={`tx2-row-${tx.id}`}
                style={styles.txRow}
                onPress={() => navigation.goBack()}
              >
                <View style={styles.txIll}>
                  <TransactionGlyph icon={tx.icon} />
                </View>
                <View style={styles.txCol}>
                  <Text style={styles.txCat}>{tx.category}</Text>
                  <Text style={styles.txDesc}>{tx.description}</Text>
                  <Text style={styles.txDate}>{tx.date}</Text>
                </View>
                <Text style={styles.txAmt}>{tx.amount}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    backgroundColor: colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 26,
    paddingLeft: 22,
    paddingRight: 24,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    ...typography.screenTitle,
    color: colors.fg,
  },
  scroll: {
    flex: 1,
  },
  inner: {
    paddingTop: 22,
    paddingHorizontal: 40,
    paddingBottom: 20,
  },
  searchWrap: {
    marginBottom: 24,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 43,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    paddingHorizontal: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  fieldSpacing: {
    marginTop: 20,
  },
  fieldIcon: {
    marginRight: 11,
    flexShrink: 0,
  },
  fieldInput: {
    flex: 1,
    ...typography.text16Alt,
    color: colors.fgStrong,
  },
  fieldText: {
    flex: 1,
    ...typography.text16Alt,
    color: colors.fgStrong,
  },
  sectionLabel: {
    ...typography.sectionLabel,
    color: colors.fgBlack,
    marginBottom: 14,
  },
  txRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 83,
    paddingHorizontal: 12,
    borderRadius: radii.lg,
  },
  txIll: {
    width: 53,
    height: 53,
    flexShrink: 0,
    borderRadius: radii.xl,
    backgroundColor: colors.bgTint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txCol: {
    flex: 1,
    marginLeft: 16,
    minWidth: 0,
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
    ...typography.text12,
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
  txAmt: {
    fontFamily: fonts.inter100,
    fontSize: 14,
    lineHeight: 18,
    color: colors.fgBlack,
    flexShrink: 0,
  },
});
