import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { MoneyStackParamList } from '../navigation/RootNavigator';
import { colors, fonts, radii, typography } from '../theme';
import type { WeeklyExpense } from '../types';

const WEEKLY_EXPENSES: WeeklyExpense[] = [
  {
    id: '1',
    icon: 'movie',
    title: 'Spend On Fun Mall Cinema',
    amount: 23,
    date: '02- Monday',
    weekday: 'Monday',
  },
  {
    id: '2',
    icon: 'coffee',
    title: 'Spend On Starbucks',
    amount: 13,
    date: '02- Monday',
    weekday: 'Monday',
  },
  {
    id: '3',
    icon: 'shop',
    title: 'Spend On Super Market',
    amount: 43,
    date: '01- Sunday',
    weekday: 'Sunday',
  },
  {
    id: '4',
    icon: 'shop',
    title: 'Spend On Super Market',
    amount: 25,
    date: '01- Sunday',
    weekday: 'Sunday',
  },
];

const ROW_ILLUSTRATIONS = [
  require('../../design/figma/assets/illustration-53x53.png'),
  require('../../design/figma/assets/illustration-53x53-2.png'),
  require('../../design/figma/assets/illustration-53x53-3.png'),
  require('../../design/figma/assets/illustration-53x53-4.png'),
];

const depositDot = '#2B2B2B';

type Props = NativeStackScreenProps<MoneyStackParamList, 'MoneyManagement2'>;

export default function MoneyManagement2Screen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
      >
        <View style={[styles.header, { paddingTop: insets.top }]}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Back to Money Management"
            testID="money-management-2-back"
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            hitSlop={8}
          >
            <Image
              source={require('../../design/figma/assets/icon-32x32.png')}
              style={styles.backIcon}
            />
          </Pressable>

          <Text style={styles.pageTitle}>weekly report</Text>

          <Image
            source={require('../../design/figma/assets/illustration-256x218.png')}
            style={styles.heroIllustration}
          />

          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: colors.accent }]} />
              <Text style={styles.legendLabel}>expenses</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: depositDot }]} />
              <Text style={styles.legendLabel}>deposit</Text>
            </View>
          </View>
        </View>

        <View style={styles.list}>
          {WEEKLY_EXPENSES.map((expense, index) => (
            <View key={expense.id} style={styles.row}>
              <Image source={ROW_ILLUSTRATIONS[index]} style={styles.rowIllustration} />
              <View style={styles.rowText}>
                <Text style={styles.rowCategory}>{expense.icon}</Text>
                <Text style={styles.rowTitle}>{expense.title}</Text>
                <Text style={styles.rowDate}>{expense.date}</Text>
              </View>
              <Text style={styles.rowAmount}>{`${expense.amount.toFixed(2)}€`}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
  },
  scroll: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.surface,
    alignItems: 'center',
    paddingBottom: 24,
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 47,
    width: 32,
    height: 32,
    borderRadius: radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  pageTitle: {
    ...typography.pageLabel,
    color: colors.fgBlack,
    marginTop: 61,
  },
  heroIllustration: {
    width: 256,
    height: 218,
    marginTop: 49,
    resizeMode: 'contain',
  },
  legend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 13,
    height: 13,
    borderRadius: radii.sm,
    marginHorizontal: 18,
  },
  legendLabel: {
    fontFamily: fonts.inter100,
    fontSize: 9,
    lineHeight: 11,
    textTransform: 'uppercase',
    color: colors.fgBlack,
    marginRight: 22,
  },
  list: {
    paddingHorizontal: 28,
    marginTop: 28,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    minHeight: 53,
    marginBottom: 30,
  },
  rowIllustration: {
    width: 53,
    height: 53,
    marginRight: 20,
    resizeMode: 'contain',
  },
  rowText: {
    flex: 1,
  },
  rowCategory: {
    fontFamily: fonts.inter100,
    fontSize: 9,
    lineHeight: 11,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
    color: colors.fgBlack,
  },
  rowTitle: {
    ...typography.text12,
    color: colors.fgBlack,
  },
  rowDate: {
    fontFamily: fonts.inter100,
    fontSize: 9,
    lineHeight: 11,
    textTransform: 'uppercase',
    color: colors.fgBlack,
  },
  rowAmount: {
    fontFamily: fonts.inter100,
    fontSize: 14,
    lineHeight: 18,
    color: colors.fgBlack,
  },
});
