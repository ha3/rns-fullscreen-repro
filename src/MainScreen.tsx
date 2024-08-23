import * as React from 'react';
import { Button, StyleSheet, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const MainScreen = ({
  navigation
}: NativeStackScreenProps<Record<string, object | undefined>>) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter }
      ]}
    >
      <Text style={{ color: isDarkMode ? Colors.light : Colors.dark }}>
        Main Screen
      </Text>
      <Button title="Press" onPress={() => navigation.navigate('modal')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MainScreen;
