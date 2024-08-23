import * as React from 'react';
import { Button, StyleSheet, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const FullScreenModal = ({ navigation }: NativeStackScreenProps<{}>) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? Colors.darker : Colors }
      ]}
    >
      <Text style={{ color: Colors.light }}>FullScreenModal</Text>
      <Button title="Go back" onPress={navigation.goBack} />
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

export default FullScreenModal;
