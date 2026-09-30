import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import type { MoneyStackParamList } from '../navigation/RootNavigator';
import { colors, radii, spacing, typography } from '../theme';
import type { Category } from '../types';

type Props = NativeStackScreenProps<MoneyStackParamList, 'MoneyManagement3'>;

const backIcon = require('../../design/figma/assets/icon-32x32.png');

const ICON_STROKE = colors.secondary;
const ICON_STROKE_WIDTH = 1.8;

// Sample categories, local to this screen (no network, no backend).
const CATEGORIES: Category[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'food', label: 'Food', icon: 'food' },
  { id: 'work', label: 'Work', icon: 'work' },
  { id: 'friends', label: 'Friends', icon: 'friends' },
  { id: 'shopping', label: 'Shopping', icon: 'shopping' },
  { id: 'transport', label: 'Transport', icon: 'transport' },
];

function DocumentIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Path d="M4 20h16" stroke={ICON_STROKE} strokeWidth={ICON_STROKE_WIDTH} />
      <Path d="M5 20V6h14v14" stroke={ICON_STROKE} strokeWidth={ICON_STROKE_WIDTH} />
      <Path d="M9 10h6M9 14h6" stroke={ICON_STROKE} strokeWidth={ICON_STROKE_WIDTH} />
    </Svg>
  );
}

function PencilIcon() {
  return (
    <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"
        stroke={ICON_STROKE}
        strokeWidth={ICON_STROKE_WIDTH}
        strokeLinejoin="round"
      />
      <Path
        d="M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
        stroke={ICON_STROKE}
        strokeWidth={ICON_STROKE_WIDTH}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function MoneyIcon() {
  return (
    <Svg width={15} height={15} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 3v18M7 7l5-4 5 4M7 17l5 4 5-4"
        stroke={ICON_STROKE}
        strokeWidth={ICON_STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function CartIcon() {
  return (
    <Svg width={15} height={15} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 4h2l2 10h9l2-7H8"
        stroke={ICON_STROKE}
        strokeWidth={ICON_STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={9} cy={18} r={1.5} stroke={ICON_STROKE} strokeWidth={ICON_STROKE_WIDTH} />
      <Circle cx={17} cy={18} r={1.5} stroke={ICON_STROKE} strokeWidth={ICON_STROKE_WIDTH} />
    </Svg>
  );
}

function CalendarIcon() {
  return (
    <Svg width={15} height={16} viewBox="0 0 24 24" fill="none">
      <Rect x={3} y={5} width={18} height={16} rx={2} stroke={ICON_STROKE} strokeWidth={ICON_STROKE_WIDTH} />
      <Path d="M3 9h18M8 3v4M16 3v4" stroke={ICON_STROKE} strokeWidth={ICON_STROKE_WIDTH} strokeLinecap="round" />
    </Svg>
  );
}

export default function MoneyManagement3Screen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Back"
          testID="back-button"
          hitSlop={8}
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image source={backIcon} style={styles.backIcon} />
        </Pressable>
        <Text style={styles.title}>Add Expense</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.field}>
          <DocumentIcon />
          <TextInput
            style={styles.fieldText}
            placeholder="Name"
            placeholderTextColor={colors.divider}
            accessibilityLabel="Name"
            testID="input-name"
          />
        </View>

        <View style={styles.field}>
          <PencilIcon />
          <TextInput
            style={styles.fieldText}
            placeholder="Beschreibung"
            placeholderTextColor={colors.divider}
            accessibilityLabel="Beschreibung"
            testID="input-description"
          />
        </View>

        <View style={styles.field}>
          <MoneyIcon />
          <TextInput
            style={styles.fieldText}
            placeholder="Amount"
            placeholderTextColor={colors.divider}
            keyboardType="numeric"
            accessibilityLabel="Amount"
            testID="input-amount"
          />
        </View>

        <View style={styles.categoryBlock}>
          <Pressable
            style={styles.categoryField}
            accessibilityRole="button"
            accessibilityLabel="Category"
            accessibilityState={{ expanded: categoryOpen }}
            testID="input-category"
            onPress={() => setCategoryOpen((open) => !open)}
          >
            <CartIcon />
            <Text style={[styles.fieldText, !selectedCategory && styles.placeholderText]}>
              {selectedCategory ? selectedCategory.label : 'Category'}
            </Text>
          </Pressable>
          {categoryOpen ? (
            <View style={styles.dropdown}>
              {CATEGORIES.map((category, index) => (
                <Pressable
                  key={category.id}
                  style={[
                    styles.dropdownOption,
                    index < CATEGORIES.length - 1 && styles.dropdownOptionDivider,
                  ]}
                  accessibilityRole="button"
                  testID={`category-option-${category.id}`}
                  onPress={() => {
                    setSelectedCategory(category);
                    setCategoryOpen(false);
                  }}
                >
                  <Text style={styles.dropdownOptionText}>{category.label}</Text>
                </Pressable>
              ))}
            </View>
          ) : null}
        </View>

        <View style={styles.field}>
          <CalendarIcon />
          <TextInput
            style={styles.fieldText}
            placeholder="Select Date"
            placeholderTextColor={colors.divider}
            accessibilityLabel="Select Date"
            testID="input-date"
          />
        </View>

        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          accessibilityRole="button"
          accessibilityLabel="Add Expense"
          testID="add-expense"
          onPress={() => navigation.navigate('MoneyManagement')}
        >
          <Text style={styles.buttonText}>Add Expense</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const fieldShadow = {
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.08,
  shadowRadius: 16,
  elevation: 3,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    height: 138,
    backgroundColor: colors.surface,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 47,
    top: 55,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 32,
    height: 32,
  },
  title: {
    ...typography.pageLabel,
    color: colors.fgBlack,
    textAlign: 'center',
  },
  content: {
    paddingTop: spacing[4],
    paddingBottom: spacing[4],
    alignItems: 'center',
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 334,
    height: 43,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    paddingHorizontal: spacing[3],
    marginBottom: spacing[4],
    ...fieldShadow,
  },
  fieldText: {
    ...typography.text16Alt,
    color: colors.fgStrong,
    marginLeft: spacing[1],
    flex: 1,
    paddingVertical: 0,
  },
  placeholderText: {
    color: colors.fgStrong,
    opacity: 0.2,
  },
  categoryBlock: {
    width: 334,
    marginBottom: spacing[4],
  },
  categoryField: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 334,
    height: 43,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    paddingHorizontal: spacing[3],
    ...fieldShadow,
  },
  dropdown: {
    marginTop: spacing[0],
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    overflow: 'hidden',
    ...fieldShadow,
  },
  dropdownOption: {
    height: 43,
    justifyContent: 'center',
    paddingHorizontal: spacing[3],
  },
  dropdownOptionDivider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  dropdownOptionText: {
    ...typography.text16Alt,
    color: colors.fgStrong,
  },
  button: {
    width: 334,
    height: 43,
    backgroundColor: colors.accent,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing[4],
    ...fieldShadow,
  },
  buttonPressed: {
    backgroundColor: colors.accentLight,
  },
  buttonText: {
    ...typography.text16Alt,
    color: colors.onAccent,
  },
});
