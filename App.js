import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux"
import { store } from "./store.js"
import HomeScreen from './screens/HomeScreen.js';
import MapScreen from './screens/MapScreen.js';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1) Set up redux
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Screen 
            name='HomeScreen'
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name='MapScreen'
            component={MapScreen}
            options={{
              headerShown: false,
            }}
          />
          <HomeScreen />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
