import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

import type { TimeStackParamList } from '../navigation/RootNavigator';
import { colors, fonts } from '../theme';

type Props = NativeStackScreenProps<TimeStackParamList, 'TimeManagement2'>;

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const DAYS = [15, 16, 17, 18, 19, 20, 21];
const MONTH_LABEL = 'April 2019';
const WEEK_RANGE_LABEL = '15-21 April 2019';

const APPOINTMENTS = ['10 AM', '12 AM', '15 AM'].map((time, index) => ({
  id: String(index + 1),
  time,
  cardTop: 66 + index * 135,
  timeTop: 71 + index * 135,
  tickTop: 153 + index * 135,
  title: 'Work',
  subtitle: 'Besprechung',
  range: '10AM - 11AM',
}));

function ClockIcon({ size = 11, color = colors.secondary }: { size?: number; color?: string }) {
  const center = size / 2;
  const radius = center - 0.5;
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Circle cx={center} cy={center} r={radius} stroke={color} strokeWidth={1} fill="none" />
      <Line x1={center} y1={center} x2={center} y2={center - radius * 0.45} stroke={color} strokeWidth={1} />
      <Line x1={center} y1={center} x2={center + radius * 0.4} y2={center} stroke={color} strokeWidth={1} />
    </Svg>
  );
}

export default function TimeManagement2Screen({ navigation }: Props) {
  const [selectedDay, setSelectedDay] = useState(18);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          accessibilityRole="button"
          accessibilityLabel="Back"
          testID="back-button"
          hitSlop={12}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../design/figma/assets/noun-back-1227057.png')}
            style={styles.backIcon}
          />
        </Pressable>
        <Text style={styles.title}>My Appointments</Text>

        <View style={styles.weekRangeRow}>
          <Image
            source={require('../../design/figma/assets/icon-8x14-2.png')}
            style={styles.chevron}
          />
          <Text style={styles.weekRange}>{WEEK_RANGE_LABEL}</Text>
          <Image
            source={require('../../design/figma/assets/icon-8x14.png')}
            style={styles.chevron}
          />
        </View>

        <View style={styles.weekdayRow}>
          {WEEKDAYS.map((weekday, index) => (
            <Text key={`${weekday}-${index}`} style={styles.weekday}>
              {weekday}
            </Text>
          ))}
        </View>

        <View style={styles.dayRow}>
          {DAYS.map((day) => {
            const active = day === selectedDay;
            return (
              <Pressable
                key={day}
                style={styles.dayCell}
                accessibilityRole="button"
                accessibilityLabel={`${day} ${MONTH_LABEL}`}
                testID={`day-${day}`}
                onPress={() => setSelectedDay(day)}
              >
                {active ? <View style={styles.dayActive} /> : null}
                <Text style={[styles.dayText, active && styles.dayTextActive]}>{day}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.dateSelector}>
          <Image
            source={require('../../design/figma/assets/icon-10x6.png')}
            style={styles.dateSelectorIcon}
          />
        </View>
        <Text style={styles.dateLabel}>{`${selectedDay} ${MONTH_LABEL}`}</Text>

        {APPOINTMENTS.map((appointment) => (
          <View key={appointment.id}>
            <Text style={[styles.timeLabel, { top: appointment.timeTop }]}>{appointment.time}</Text>
            <View style={[styles.tick, { top: appointment.tickTop }]} />
            <View style={[styles.card, { top: appointment.cardTop }]}>
              <Text style={styles.cardTitle}>{appointment.title}</Text>
              <Text style={styles.cardSubtitle}>{appointment.subtitle}</Text>
              <View style={styles.cardTimeRow}>
                <ClockIcon />
                <Text style={styles.cardTime}>{appointment.range}</Text>
              </View>
              <Image
                source={require('../../design/figma/assets/fc8cc65f046eeb0b9efb159aad932e2b.png')}
                style={styles.cardPhoto}
              />
              <View style={styles.cardLine} />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  header: {
    height: 268,
    backgroundColor: colors.surface,
  },
  backButton: {
    position: 'absolute',
    left: 40,
    top: 29,
  },
  backIcon: {
    width: 11,
    height: 18,
  },
  title: {
    position: 'absolute',
    top: 52,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontFamily: fonts.ubuntu700,
    fontSize: 17,
    lineHeight: 20,
    color: colors.fgBlack,
  },
  weekRangeRow: {
    position: 'absolute',
    top: 121,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
  },
  weekRange: {
    fontFamily: fonts.ubuntu400,
    fontSize: 13,
    lineHeight: 15,
    color: colors.fgBlack,
  },
  chevron: {
    width: 8,
    height: 14,
  },
  weekdayRow: {
    position: 'absolute',
    top: 175,
    left: 36,
    right: 36,
    flexDirection: 'row',
  },
  weekday: {
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.ubuntu400,
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.4,
    color: colors.fgBlack,
  },
  dayRow: {
    position: 'absolute',
    top: 211,
    left: 36,
    right: 36,
    flexDirection: 'row',
  },
  dayCell: {
    flex: 1,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayActive: {
    position: 'absolute',
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.accent,
  },
  dayText: {
    fontFamily: fonts.ubuntu400,
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.4,
    color: colors.fgBlack,
  },
  dayTextActive: {
    color: colors.onAccent,
  },
  content: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  dateSelector: {
    position: 'absolute',
    left: 120,
    top: 0,
    width: 164,
    height: 34,
    backgroundColor: colors.surface,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateSelectorIcon: {
    width: 10,
    height: 6,
  },
  dateLabel: {
    position: 'absolute',
    left: 30,
    top: 27,
    fontFamily: fonts.ubuntu700,
    fontSize: 11,
    lineHeight: 12,
    letterSpacing: 0.3,
    color: 'rgba(0, 0, 0, 0.44)',
  },
  timeLabel: {
    position: 'absolute',
    left: 34,
    fontFamily: fonts.aleo700,
    fontSize: 11,
    lineHeight: 12,
    letterSpacing: 0.3,
    color: colors.fgBlack,
  },
  tick: {
    position: 'absolute',
    left: 41,
    width: 22,
    height: 1,
    backgroundColor: 'rgba(112, 112, 112, 0.18)',
  },
  card: {
    position: 'absolute',
    left: 94,
    width: 286,
    height: 118,
    backgroundColor: colors.accentBar,
  },
  cardTitle: {
    position: 'absolute',
    left: 20,
    top: 15,
    fontFamily: fonts.ubuntu700,
    fontSize: 11,
    lineHeight: 12,
    color: colors.secondary,
  },
  cardSubtitle: {
    position: 'absolute',
    left: 20,
    top: 43,
    fontFamily: fonts.ubuntu400,
    fontSize: 10,
    lineHeight: 12,
    color: 'rgba(0, 0, 0, 0.42)',
  },
  cardTimeRow: {
    position: 'absolute',
    left: 19,
    top: 64,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTime: {
    fontFamily: fonts.ubuntu700,
    fontSize: 7,
    lineHeight: 10,
    color: colors.secondary,
  },
  cardPhoto: {
    position: 'absolute',
    left: 215,
    top: 8,
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  cardLine: {
    position: 'absolute',
    left: 0,
    top: 99,
    width: 286,
    height: 1,
    backgroundColor: colors.warnLine,
  },
});
