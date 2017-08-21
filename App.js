/*
  https://coolors.co/16bac5-285068-171d1c-ede6f2-5863f8
*/


import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ScrollView, Image} from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.buttonText}>Chronote Tell Time</Text>

        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: 10
          }}
          />
        <Image source={require('./app/assets/img/clock.png')} style={styles.clock}/>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#ede6f2',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 40
  },
  clock: {


    width: 285.96,
    height: 285.96


}
});
