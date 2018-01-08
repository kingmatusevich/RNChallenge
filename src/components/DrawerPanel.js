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
  title: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

const DrawerPanel = ({authentication, dispatch, chosenAPI}) => (
  
  <View style={styles.container}>
    <Text style={styles.title}>
      {authentication.username || ''}
    </Text>
    <Text style={styles.welcome}>
      Welcome to your drawer
    </Text>
    <Button onPress={() => dispatch(Creators.logout())} title="Log Out" icon={{name: "account-circle"}} backgroundColor="blue" />
    <Text style={styles.subtitle}>You are seeing {chosenAPI}</Text>
    {chosenAPI === 'dogs'? 
      <Button onPress={() => dispatch(Creators.selectApi('beers'))} title="See Beers" icon={{name: "local-drink"}} backgroundColor="#a39b00" /> :
      <Button onPress={() => dispatch(Creators.selectApi('dogs'))} title="See Dogs" icon={{name: "pets"}} backgroundColor="brown" />
    }
    
    
  </View>
);

DrawerPanel.propTypes = {
  authentication: PropTypes.object.isRequired
};

export default DrawerPanel;