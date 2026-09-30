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
import type { QuickAddItem } from '../types';
import { colors, radii, typography } from '../theme';

type Props = NativeStackScreenProps<TimeStackParamList, 'TimeManagement3'>;

const QUICK_ADDS: QuickAddItem[] = [
  { id: 'gym', title: 'Gym', description: 'Customize Plan' },
  { id: 'work', title: 'Work', description: 'Normal Day' },
  { id: 'birthday', title: 'Birthday', description: 'Friend' },
  { id: 'dr-jeff-smiths', title: 'Dr. Jeff Smiths', description: 'Dermatologist' },
];

const userIcon = require('../../design/figma/assets/noun-user-1335326.png');
const dateIcon = require('../../design/figma/assets/icon-15x16.png');
const rowImage = require('../../design/figma/assets/image-69x69.png');

export default function TimeManagement3Screen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const applyQuickAdd = (item: QuickAddItem) => {
    setName(item.title);
    setDescription(item.description);
  };

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <View style={styles.headerTopRow}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Back"
            testID="time3-back-button"
            onPress={goBack}
            hitSlop={12}
            style={styles.headerIconButton}
          >
            <Ionicons name="chevron-back" size={18} color={colors.chevron} />
          </Pressable>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Profile"
            testID="time3-user-button"
            onPress={() => {}}
            hitSlop={8}
          >
            <Image source={userIcon} style={styles.userIcon} />
          </Pressable>
        </View>
        <Text style={styles.title}>Add an appointment</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.field}>
          <Ionicons name="search-outline" size={16} color={colors.secondary} />
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Name"
            placeholderTextColor={colors.fgStrong}
            accessibilityLabel="Name"
            testID="time3-name-input"
          />
        </View>

        <View style={styles.field}>
          <Ionicons name="map-outline" size={16} color={colors.secondary} />
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            placeholder="Beschreibung"
            placeholderTextColor={colors.fgStrong}
            accessibilityLabel="Beschreibung"
            testID="time3-description-input"
          />
        </View>

        <View style={styles.field}>
          <Image source={dateIcon} style={styles.dateIcon} />
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            placeholder="Select Date"
            placeholderTextColor={colors.fgStrong}
            accessibilityLabel="Select Date"
            testID="time3-date-input"
          />
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Add Appointment"
          testID="time3-add-appointment"
          onPress={goBack}
          style={({ pressed }) => [
            styles.addButton,
            pressed && styles.addButtonPressed,
          ]}
        >
          <Text style={styles.addButtonLabel}>Add Appointment</Text>
        </Pressable>

        <View style={styles.quickAddsHeader}>
          <Text style={styles.quickAddsLabel}>Quick Adds</Text>
          <Ionicons name="options-outline" size={22} color={colors.secondary} />
        </View>

        {QUICK_ADDS.map((item) => (
          <Pressable
            key={item.id}
            accessibilityRole="button"
            accessibilityLabel={`${item.title}, ${item.description}`}
            testID={`quick-add-${item.id}`}
            onPress={() => applyQuickAdd(item)}
            style={({ pressed }) => [
              styles.row,
              pressed && styles.rowPressed,
            ]}
          >
            <Image source={rowImage} style={styles.rowImage} />
            <View style={styles.rowText}>
              <Text style={styles.rowTitle}>{item.title}</Text>
              <Text style={styles.rowSubtitle}>{item.description}</Text>
            </View>
            <View style={styles.dots}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </Pressable>
        ))}
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
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 4,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  headerIconButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIcon: {
    width: 27,
    height: 27,
  },
  title: {
    ...typography.screenTitle,
    color: colors.fg,
    paddingLeft: 18,
    paddingTop: 6,
    paddingBottom: 14,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 40,
    paddingTop: 23,
    paddingBottom: 24,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 43,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    paddingHorizontal: 16,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  input: {
    ...typography.text16Alt,
    color: colors.fgStrong,
    flex: 1,
    marginLeft: 16,
    paddingVertical: 0,
  },
  dateIcon: {
    width: 15,
    height: 16,
  },
  addButton: {
    height: 43,
    backgroundColor: colors.accent,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  addButtonPressed: {
    backgroundColor: '#57B268',
  },
  addButtonLabel: {
    ...typography.text16Alt,
    color: colors.onAccent,
  },
  quickAddsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 8,
    paddingHorizontal: 1,
  },
  quickAddsLabel: {
    ...typography.text16Alt,
    color: colors.fgStrong,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  rowPressed: {
    backgroundColor: colors.bg,
  },
  rowImage: {
    width: 69,
    height: 69,
  },
  rowText: {
    flex: 1,
    marginLeft: 16,
  },
  rowTitle: {
    ...typography.text14,
    color: colors.fgStrong,
  },
  rowSubtitle: {
    ...typography.text12Alt,
    color: colors.fgStrong,
    opacity: 0.4,
    marginTop: 2,
  },
  dots: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: colors.secondary,
    marginVertical: 2,
  },
});
