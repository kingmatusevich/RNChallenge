/**
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider, connect } from 'react-redux';
import {storeCreation, startSagas} from './src/store';
import PropTypes from 'prop-types';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { createActions } from 'reduxsauce';
import Drawer from 'react-native-drawer';
import DrawerPanel from './src/components/DrawerPanel';
import RootView from './src/views/RootView';
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

class RNChallengeApp extends React.Component {
  store = storeCreation();

  componentDidMount() {
    startSagas();
  }
  

  render() {
    return (
      <Provider store={this.store}>
          <RootView />
      </Provider>
    );
  }
}
const ConnectedComponent = RNChallengeApp;

AppRegistry.registerComponent('RNChallengeApp', () => ConnectedComponent);

export default ConnectedComponent;