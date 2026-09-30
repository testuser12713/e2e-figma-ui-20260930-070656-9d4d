import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import type { TimeStackParamList } from '../navigation/RootNavigator';
import { colors, typography } from '../theme';

type Props = NativeStackScreenProps<TimeStackParamList, 'TimeManagement3'>;

export default function TimeManagement3Screen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time Management 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...typography.screenTitle,
    color: colors.fg,
  },
});
