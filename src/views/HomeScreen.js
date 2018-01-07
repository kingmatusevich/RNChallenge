import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View } from 'react-native';
import {Creators} from '../store/actions';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const HomeScreen = ({ navigation, authentication, dispatch }) => (
  <View style={styles.container}>
    <View style={styles.main}>
      <Text style={styles.welcome}>
        Log In Screen
      </Text>
      <Text style={styles.instructions}>
        Complete your username and password
      </Text>
      <FormLabel>Username</FormLabel>
      <FormInput/>
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry/>
      <Button
        large
        buttonStyle={{width: '100%'}}
        backgroundColor="green"
        loadingRight
        disabled={authentication.loading}
        loading={authentication.loading}
        icon={{name: 'account-circle'}}
        onPress={() => dispatch(Creators.loginAttempt())}
        title='Log In' />
      </View>
  </View>
);

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

HomeScreen.navigationOptions = {
  title: 'Log In',
  mode: "modal",
  header: null,
  gesturesEnabled: false 
};

HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  authentication: state.authentication
});

export default connect(mapStateToProps)(HomeScreen);