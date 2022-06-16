import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import Main from "./Navigations/Main";
import Auth from "./Navigations/Auth"

import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={Store}>
        <NavigationContainer>

          {
            isAuthenticated ? (
              <Main />
            )
              : (
                <Auth />
              )
          }
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}



