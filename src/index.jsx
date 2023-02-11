import { ActivityIndicator, Text, View } from 'react-native';

import AppNavigator from './navigation';
import { THEME } from './constants/theme';
import { styles } from './styles';
import { useFonts } from 'expo-font';

const App = () => {
  const [loaded] = useFonts({
    "OpenSans-Bold": require('../assets/fonts/OpenSans-Bold.ttf'),
    "OpenSans-Light": require('../assets/fonts/OpenSans-Light.ttf'),
    "OpenSans-Medium": require('../assets/fonts/OpenSans-Medium.ttf'),
    "OpenSans-Regular": require('../assets/fonts/OpenSans-Regular.ttf'),
  })

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={THEME.colors.primary} />
      </View>
    )
  }

  return (
    <AppNavigator />
  );
}

export default App;