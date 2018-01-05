import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const DetailScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      This is an item
    </Text>
    <Text style={styles.instructions}>
      Show the detail here
    </Text>
  </View>
);

DetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

DetailScreen.navigationOptions = {
  title: 'Detail',
  mode: 'card',
  headerBackTitle: "Back"
};

export default DetailScreen;