/**
 * @flow
 */

import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import {storeCreation, startSagas} from './src/store';
import PropTypes from 'prop-types';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { createActions } from 'reduxsauce';
import Drawer from 'react-native-drawer';
import DrawerPanel from './src/components/DrawerPanel';
import RootView from './src/views/RootView';
import { PersistGate } from 'redux-persist/es/integration/react'
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}
let {store:aStore, persistor:aPersistor} = storeCreation();
class RNChallengeApp extends React.Component {
  store = aStore;
  persistor = aPersistor; 

  componentDidMount() {
    startSagas();
  }
  

  render() {
    return (
      <Provider store={this.store}>
      <PersistGate persistor={this.persistor} loading={<View />}>
          <RootView />
      </PersistGate>
      </Provider>
    );
  }
}
const ConnectedComponent = RNChallengeApp;

AppRegistry.registerComponent('RNChallengeApp', () => ConnectedComponent);

export default ConnectedComponent;