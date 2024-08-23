import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { StatusBar, Text, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import MainScreen from './MainScreen';
import FullScreenModal from './FullScreenModal';

const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme();

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
      />
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="modal"
            component={FullScreenModal}
            options={({}) => ({
              presentation: 'fullScreenModal',
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => (
                <Text style={{ color: isDarkMode ? Colors.light : Colors.dark }}>
                  Header Title
                </Text>
              )
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
