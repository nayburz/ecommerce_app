import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Layout/Header';

import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Header />
      </View>
    </SafeAreaView>
  );
}


