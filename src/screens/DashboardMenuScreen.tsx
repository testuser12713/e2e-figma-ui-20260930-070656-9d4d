import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import type { DashboardStackParamList } from '../navigation/RootNavigator';
import { colors, typography } from '../theme';

type Props = NativeStackScreenProps<DashboardStackParamList, 'DashboardMenu'>;

export default function DashboardMenuScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard Menu</Text>
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
