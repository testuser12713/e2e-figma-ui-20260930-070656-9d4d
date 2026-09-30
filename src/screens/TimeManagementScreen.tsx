import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { TimeStackParamList } from '../navigation/RootNavigator';
import { colors, radii, spacing, typography } from '../theme';
import type { Appointment } from '../types';

type Props = NativeStackScreenProps<TimeStackParamList, 'TimeManagement'>;

const APPOINTMENTS: Appointment[] = [
  { id: '1', name: 'Clara Odding', specialty: 'Dentist', date: '09/04/2020', time: '', status: 'upcoming' },
  { id: '2', name: 'Steven Pauliner', specialty: 'Cardiologist', date: '21/04/2020', time: '', status: 'upcoming' },
  { id: '3', name: 'Noemi Shinte', specialty: 'Dermatologist', date: '18/06/2020', time: '', status: 'upcoming' },
];

const shadow = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.08,
  shadowRadius: 16,
  elevation: 3,
};

export default function TimeManagementScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const visible = APPOINTMENTS.filter((appointment) => appointment.status === activeTab);

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing[5] }]}
      >
        <View style={styles.header}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Back"
            testID="back-button"
            onPress={() => navigation.goBack()}
            hitSlop={12}
          >
            <Image
              source={require('../../design/figma/assets/noun-back-1227057.png')}
              style={styles.backIcon}
            />
          </Pressable>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Profile"
            testID="profile-button"
            onPress={() =>
              navigation.getParent()?.navigate('DashboardTab', { screen: 'DashboardMenu' })
            }
            hitSlop={12}
          >
            <Image
              source={require('../../design/figma/assets/noun-user-1335326.png')}
              style={styles.userIcon}
            />
          </Pressable>
        </View>

        <Text style={styles.title}>My Appointments</Text>

        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={colors.divider}
            testID="search-input"
            accessibilityLabel="Search appointments"
          />
          <Ionicons name="search" size={16} color={colors.fgStrong} />
        </View>

        <View style={styles.tabs}>
          <Pressable
            accessibilityRole="tab"
            accessibilityLabel="Upcoming"
            testID="tab-upcoming"
            onPress={() => setActiveTab('upcoming')}
            style={styles.tabItem}
          >
            <Text style={activeTab === 'upcoming' ? styles.tabActive : styles.tabInactive}>
              Upcoming
            </Text>
            {activeTab === 'upcoming' && <View style={styles.activeUnderline} />}
          </Pressable>
          <Pressable
            accessibilityRole="tab"
            accessibilityLabel="Past"
            testID="tab-past"
            onPress={() => setActiveTab('past')}
            style={[styles.tabItem, styles.tabItemRight]}
          >
            <Text style={activeTab === 'past' ? styles.tabActive : styles.tabInactive}>Past</Text>
            {activeTab === 'past' && <View style={styles.activeUnderline} />}
          </Pressable>
        </View>
        <View style={styles.baseline} />

        {visible.map((appointment) => (
          <View key={appointment.id}>
            <View style={styles.appointment}>
              <Text style={styles.date}>{appointment.date}</Text>
              <View style={styles.appointmentRow}>
                <View style={styles.nameGroup}>
                  <Text style={styles.name}>
                    {`${appointment.specialty} - ${appointment.name}`}
                  </Text>
                </View>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={`Modify ${appointment.specialty} ${appointment.name}`}
                  testID={`modify-${appointment.id}`}
                  onPress={() => navigation.navigate('TimeManagement3')}
                  style={styles.modify}
                  hitSlop={8}
                >
                  <Text style={styles.modifyText}>Modify</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.divider} />
          </View>
        ))}

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Add a new appointment"
          testID="add-appointment"
          onPress={() => navigation.navigate('TimeManagement3')}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>Add a new appointment</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: spacing[6],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 27,
  },
  backIcon: {
    width: 11,
    height: 18,
    resizeMode: 'contain',
  },
  userIcon: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
  },
  title: {
    ...typography.text16,
    color: colors.fgStrong,
    marginTop: 28,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 17,
    height: 43,
    borderRadius: radii.md,
    backgroundColor: colors.surface,
    paddingHorizontal: 16,
    ...shadow,
  },
  searchInput: {
    flex: 1,
    ...typography.text16Alt,
    color: colors.fgStrong,
    padding: 0,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 35,
    minHeight: 38,
  },
  tabItem: {
    alignItems: 'flex-start',
  },
  tabItemRight: {
    alignItems: 'flex-end',
  },
  tabActive: {
    ...typography.text16,
    color: colors.secondary,
  },
  tabInactive: {
    ...typography.text16Alt,
    color: colors.fgStrong,
  },
  activeUnderline: {
    width: 51,
    height: 2,
    backgroundColor: colors.secondary,
    marginTop: 2,
  },
  baseline: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.divider,
  },
  appointment: {
    marginTop: 16,
  },
  date: {
    ...typography.text12Alt,
    color: colors.fgStrong,
    lineHeight: 22,
    opacity: 0.4,
  },
  appointmentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  name: {
    ...typography.text14,
    color: colors.fgStrong,
  },
  modify: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  modifyText: {
    ...typography.text14,
    color: colors.secondary,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.divider,
    marginTop: 12,
  },
  primaryButton: {
    marginTop: 32,
    height: 43,
    borderRadius: radii.md,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadow,
  },
  primaryButtonText: {
    ...typography.text16Alt,
    color: colors.onAccent,
  },
});
