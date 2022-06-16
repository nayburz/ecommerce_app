import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import Main from "./Navigations/Main";

import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={Store}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}


