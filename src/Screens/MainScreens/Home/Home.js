//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import strings from '../../../constants/lang';
import actions from '../../../redux/actions';

// create a component
const Home = () => {
  const onLogout = () => {
    actions.logoutAction()
  };
  return (
    <View style={styles.container}>
      <Text>{strings.HOME}</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default Home;
