import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Creators } from '../store/actions/index';
import {Text, Button} from 'react-native-elements'; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const DrawerPanel = ({authentication, dispatch}) => (
  
  <View style={styles.container}>
    <Text h1>
      {authentication.username || ''}
    </Text>
    <Text style={styles.welcome}>
      Welcome to your drawer
    </Text>
    <Button onPress={() => dispatch(Creators.logout())} title="Log Out" icon={{name: "account-circle"}} backgroundColor="blue" />
  </View>
);

DrawerPanel.propTypes = {
  authentication: PropTypes.object.isRequired
};

export default DrawerPanel;