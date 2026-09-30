import { Aleo_700Bold } from '@expo-google-fonts/aleo';
import { Inter_100Thin, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    Aleo_700Bold,
    Inter_100Thin,
    Inter_400Regular,
    Inter_500Medium,
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <RootNavigator />
    </>
  );
}
