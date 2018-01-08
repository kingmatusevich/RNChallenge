import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Keyboard } from 'react-native';
import {Creators} from '../store/actions';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import {Text} from 'react-native-elements'; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    paddingTop: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonStyle: {
    marginTop: 20,
    width: '100%'
  }
});
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render () {
    let {dispatch, authentication, navigation} = this.props;
    let {username, password} = this.state;
    const onChangeTextHandler = (field) => (value) => {
      this.setState({
        [field]: value
      })
    };

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text h2>
            Welcome
          </Text>
          <Text>
            Complete your username and password
          </Text>
          <FormLabel >Username</FormLabel>
          <FormInput value={username} onChangeText={onChangeTextHandler('username')}/>
          <FormLabel>Password</FormLabel>
          <FormInput value={password} onChangeText={onChangeTextHandler('password')} secureTextEntry/>
          <Button
            large
            containerViewStyle={styles.buttonStyle}
            buttonStyle={styles.buttonStyle}
            backgroundColor="green"
            loadingRight
            disabled={authentication.loading || username.length <3 || password.length <3}
            loading={authentication.loading}
            icon={{name: 'account-circle'}}
            onPress={() => {dispatch(Creators.loginAttempt(username, password)); Keyboard.dismiss();}}
            title='Log In' />
          </View>
      </View>
    );
  };
};
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