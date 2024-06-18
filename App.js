import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  async function getUserLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>
        Open up App.js to bare app working on your app!
      </Text>
      <View
        style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}
      >
        <Button title='Get Location' onPress={getUserLocation} />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    backgroundColor: 'white',
    fontSize: 24,
  },
});
