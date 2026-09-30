import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { MoneyStackParamList } from '../navigation/RootNavigator';
import { colors, radii, spacing, typography } from '../theme';

type Props = NativeStackScreenProps<MoneyStackParamList, 'MoneyManagement3'>;

const backIcon = require('../../design/figma/assets/icon-32x32.png');
const dateIcon = require('../../design/figma/assets/icon-15x16.png');

export default function MoneyManagement3Screen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

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
        <Text style={styles.title}>Add ExPense</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.field}>
          <Ionicons name="search" size={16} color={colors.secondary} />
          <TextInput
            style={styles.fieldText}
            placeholder="Name"
            placeholderTextColor={colors.fgStrong}
            accessibilityLabel="Name"
            testID="input-name"
          />
        </View>

        <View style={styles.field}>
          <Ionicons name="create-outline" size={16} color={colors.secondary} />
          <TextInput
            style={styles.fieldText}
            placeholder="Beschreibung"
            placeholderTextColor={colors.fgStrong}
            accessibilityLabel="Beschreibung"
            testID="input-description"
          />
        </View>

        <View style={styles.field}>
          <Ionicons name="cash-outline" size={16} color={colors.secondary} />
          <TextInput
            style={styles.fieldText}
            placeholder="Amount"
            placeholderTextColor={colors.fgStrong}
            keyboardType="numeric"
            accessibilityLabel="Amount"
            testID="input-amount"
          />
        </View>

        <View style={[styles.field, styles.fieldBeforeButton]}>
          <Image source={dateIcon} style={styles.dateIcon} />
          <TextInput
            style={styles.fieldText}
            placeholder="Select Date"
            placeholderTextColor={colors.fgStrong}
            accessibilityLabel="Select Date"
            testID="input-date"
          />
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Add Expense"
          testID="add-expense"
          onPress={() => navigation.navigate('MoneyManagement')}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
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
    backgroundColor: colors.bgAlt,
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
    paddingHorizontal: spacing[6],
    paddingTop: 38,
    paddingBottom: spacing[4],
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 43,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    paddingHorizontal: spacing[3],
    marginBottom: spacing[4],
    ...fieldShadow,
  },
  fieldBeforeButton: {
    marginBottom: 29,
  },
  fieldText: {
    ...typography.text16Alt,
    color: colors.fgStrong,
    marginLeft: spacing[1],
    flex: 1,
    paddingVertical: 0,
  },
  dateIcon: {
    width: 15,
    height: 16,
  },
  button: {
    height: 43,
    backgroundColor: colors.accent,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
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
