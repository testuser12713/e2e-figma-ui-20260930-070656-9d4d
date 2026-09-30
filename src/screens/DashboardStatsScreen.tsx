import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { DashboardStackParamList } from '../navigation/RootNavigator';
import { colors, fonts, radii } from '../theme';

type Props = NativeStackScreenProps<DashboardStackParamList, 'DashboardStats'>;

const MONTH_LABELS = ['M', 'J', 'J', 'A', 'S', 'O', 'N', 'D', 'J', 'M', 'A'];
const MONTH_X = [49, 76, 103, 129, 156, 183, 210, 237, 263, 290, 317];

const AXIS_VALUES = [
  { label: '90', y: 382 },
  { label: '80', y: 465 },
  { label: '70', y: 548 },
  { label: '60', y: 626 },
];

type Dot = { cx: number; cy: number; size: number; highlight?: boolean };

const DATA_DOTS: Dot[] = [
  { cx: 52.5, cy: 619.5, size: 9 },
  { cx: 80.5, cy: 556.5, size: 9 },
  { cx: 106.5, cy: 542.5, size: 9 },
  { cx: 132.5, cy: 536.5, size: 9 },
  { cx: 160.5, cy: 552.5, size: 9 },
  { cx: 187.5, cy: 536.5, size: 9, highlight: true },
  { cx: 214.5, cy: 498.5, size: 11 },
  { cx: 240.5, cy: 553.5, size: 9 },
  { cx: 266.5, cy: 567.5, size: 9 },
  { cx: 295.5, cy: 537.5, size: 9 },
];

const HORIZONTAL_GRID_Y = [426, 512, 596];

export default function DashboardStatsScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <Image
        source={require('../../design/figma/assets/gruppe-maskieren-6.png')}
        style={styles.topIllustration}
        resizeMode="stretch"
      />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Back"
        testID="stats-back"
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require('../../design/figma/assets/noun-back-1227057.png')}
          style={styles.backIcon}
        />
      </Pressable>

      <Image
        source={require('../../design/figma/assets/noun-user-1335326.png')}
        style={styles.userIcon}
      />

      <Text style={styles.title}>Statistics</Text>

      <View style={styles.restRate}>
        <Text style={styles.since}>Since 21. Dec</Text>

        <View style={styles.daysRow}>
          <Text style={styles.daysNumber}>20</Text>
          <Text style={styles.daysUnit}>DAYS</Text>
        </View>

        <Text style={styles.period}>Dec 2024 - Jan 2024</Text>

        <View style={styles.switch}>
          <Text style={styles.switchLabel1}>D</Text>
          <Text style={styles.switchLabel2}>W</Text>
          <Text style={styles.switchLabel3}>M</Text>
          <View style={styles.switchPill}>
            <Text style={styles.switchPillLabel}>Y</Text>
          </View>
        </View>

        <View style={styles.statCard}>
          <LinearGradient
            colors={['#6BC57B', '#00FF2D00']}
            style={styles.areaFill}
          />

          <Image
            source={require('../../design/figma/assets/gruppe-maskieren-1.png')}
            style={styles.chartLine}
            resizeMode="stretch"
          />

          {HORIZONTAL_GRID_Y.map((y) => (
            <View key={`h-${y}`} style={[styles.hGridLine, { top: y - 342 }]} />
          ))}

          <View style={styles.vGridLine} />

          {MONTH_LABELS.map((label, i) => (
            <Text key={`m-${i}`} style={[styles.monthLabel, { left: MONTH_X[i] - 39 }]}>
              {label}
            </Text>
          ))}

          {AXIS_VALUES.map((v) => (
            <Text key={v.label} style={[styles.axisValue, { top: v.y - 342 }]}>
              {v.label}
            </Text>
          ))}

          {DATA_DOTS.map((dot, i) => (
            <View
              key={`d-${i}`}
              style={[
                styles.dot,
                {
                  left: dot.cx - 39 - dot.size / 2,
                  top: dot.cy - 342 - dot.size / 2,
                  width: dot.size,
                  height: dot.size,
                  borderRadius: dot.size / 2,
                },
                dot.highlight && styles.dotHighlight,
              ]}
            />
          ))}

          <View style={styles.tooltip}>
            <Text style={styles.tooltipText}>20 DAYS</Text>
          </View>
        </View>
      </View>

      <Text style={styles.footerLine}>Top Run: 20 Days</Text>
      <Text style={styles.footerLine2}>Restarts: 4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  topIllustration: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 455,
    height: 120,
  },
  backButton: {
    position: 'absolute',
    top: 29,
    left: 40,
    width: 44,
    height: 44,
    justifyContent: 'center',
  },
  backIcon: {
    width: 11,
    height: 18,
  },
  userIcon: {
    position: 'absolute',
    top: 25,
    left: 348,
    width: 27,
    height: 27,
  },
  title: {
    position: 'absolute',
    top: 135,
    left: 40,
    fontFamily: fonts.aleo700,
    fontSize: 16,
    lineHeight: 19,
    color: colors.fgStrong,
  },
  restRate: {
    position: 'absolute',
    top: 193,
    left: 39,
    width: 336,
    height: 485,
  },
  since: {
    position: 'absolute',
    top: 0,
    left: 1,
    fontFamily: fonts.inter400,
    fontSize: 14,
    lineHeight: 17,
    color: colors.fg,
  },
  daysRow: {
    position: 'absolute',
    top: 26,
    left: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  daysNumber: {
    fontFamily: fonts.inter400,
    fontSize: 24,
    lineHeight: 24,
    color: colors.fgStrong,
  },
  daysUnit: {
    fontFamily: fonts.inter400,
    fontSize: 14,
    lineHeight: 17,
    color: colors.fgStrong,
    marginBottom: 2,
  },
  period: {
    position: 'absolute',
    top: 62,
    left: 1,
    fontFamily: fonts.inter400,
    fontSize: 14,
    lineHeight: 17,
    color: colors.fgStrong,
  },
  switch: {
    position: 'absolute',
    top: 100,
    left: 1,
    width: 335,
    height: 34,
    backgroundColor: colors.surfaceCard,
    borderRadius: radii.lg,
  },
  switchLabel1: {
    position: 'absolute',
    top: 9,
    left: 21,
    fontFamily: fonts.inter400,
    fontSize: 12,
    lineHeight: 14,
    color: colors.fgStrong,
  },
  switchLabel2: {
    position: 'absolute',
    top: 9,
    left: 116,
    fontFamily: fonts.inter400,
    fontSize: 12,
    lineHeight: 14,
    color: colors.fgStrong,
  },
  switchLabel3: {
    position: 'absolute',
    top: 9,
    left: 211,
    fontFamily: fonts.inter400,
    fontSize: 12,
    lineHeight: 14,
    color: colors.fgStrong,
  },
  switchPill: {
    position: 'absolute',
    top: 4,
    left: 290,
    width: 41,
    height: 26,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.16,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  switchPillLabel: {
    fontFamily: fonts.aleo700,
    fontSize: 12,
    lineHeight: 14,
    color: colors.fgStrong,
  },
  statCard: {
    position: 'absolute',
    top: 149,
    left: 0,
    width: 336,
    height: 336,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    overflow: 'hidden',
  },
  areaFill: {
    position: 'absolute',
    top: 156,
    left: 13,
    width: 244,
    height: 129,
    opacity: 0.1,
  },
  chartLine: {
    position: 'absolute',
    top: 2,
    left: 3,
    width: 293,
    height: 333,
  },
  hGridLine: {
    position: 'absolute',
    left: 0,
    width: 336,
    height: 1,
    borderTopWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    opacity: 0.5,
  },
  vGridLine: {
    position: 'absolute',
    top: 0,
    left: 297,
    width: 1,
    height: 331,
    borderLeftWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    opacity: 0.5,
  },
  monthLabel: {
    position: 'absolute',
    top: 314,
    fontFamily: fonts.aleo700,
    fontSize: 12,
    lineHeight: 14,
    color: colors.fgStrong,
    opacity: 0.2,
  },
  axisValue: {
    position: 'absolute',
    left: 309,
    fontFamily: fonts.aleo700,
    fontSize: 12,
    lineHeight: 14,
    color: colors.fgStrong,
    opacity: 0.2,
  },
  dot: {
    position: 'absolute',
    backgroundColor: colors.surface,
    borderWidth: 3,
    borderColor: '#6BC57B',
  },
  dotHighlight: {
    borderColor: '#6BC67C',
  },
  tooltip: {
    position: 'absolute',
    top: 121,
    left: 139,
    width: 72,
    height: 26,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00C623',
    shadowOpacity: 0.16,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  tooltipText: {
    fontFamily: fonts.inter400,
    fontSize: 12,
    lineHeight: 14,
    color: colors.fgStrong,
  },
  footerLine: {
    position: 'absolute',
    top: 717,
    left: 40,
    fontFamily: fonts.inter400,
    fontSize: 14,
    lineHeight: 17,
    color: colors.fgStrong,
  },
  footerLine2: {
    position: 'absolute',
    top: 742,
    left: 40,
    fontFamily: fonts.inter400,
    fontSize: 14,
    lineHeight: 17,
    color: colors.fgStrong,
  },
});
