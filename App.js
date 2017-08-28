import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Welcome from './Welcome';
import IncrementingButton from './IncrementingButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Hello world. </Text>
        <Welcome name="Rachel"/>
        <IncrementingButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
