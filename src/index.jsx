import { ActivityIndicator, Text, View } from 'react-native';

import AppNavigator from './navigation';
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
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  return (
    <AppNavigator />
  );
}

export default App;