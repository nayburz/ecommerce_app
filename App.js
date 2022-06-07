import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Layout/Header';
import HomeScreen from './src/screens/HomeScreen';

import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Header />
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
}


