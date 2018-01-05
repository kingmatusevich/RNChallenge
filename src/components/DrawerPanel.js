import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Creators } from '../store/actions/index';

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

const DrawerPanel = () => (
  
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to your drawer
    </Text>
  </View>
);

DrawerPanel.propTypes = {
  
};

export default DrawerPanel;