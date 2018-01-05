import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Creators } from '../store/actions/index';

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

const FeedScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to your feed
    </Text>
    <Text style={styles.instructions}>
      Some great stuff here
    </Text>
    <Button
      onPress={() => navigation.dispatch(Creators.navigateDetail(10))}
      title="Show Detail of item"
    />
  </View>
);

FeedScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

FeedScreen.navigationOptions = {
  title: 'Feed',
};

export default FeedScreen;