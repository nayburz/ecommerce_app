
import { View } from 'react-native';
import Header from './src/components/Layout/Header';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={Store}>
        <View>
          <Header />
          <HomeScreen />
        </View>
      </Provider>
    </SafeAreaView>
  );
}


