/**
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import {storeCreation, startSagas} from './src/store';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { createActions } from 'reduxsauce';

class RNChallengeApp extends React.Component {
  store = storeCreation();

  componentDidMount() {
    startSagas();
  }
  

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('RNChallengeApp', () => RNChallengeApp);

export default RNChallengeApp;