/**
 * @flow
 */

import React from 'react';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppWithNavigationState from '../navigators/AppNavigator';
import { createActions } from 'reduxsauce';
import Drawer from 'react-native-drawer';
import DrawerPanel from '../components/DrawerPanel';
import { Creators } from '../store/actions/index';

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

class RootView extends React.Component {

  render() {
    console.log('drawerState', this.props);
    return (
      [
          <Drawer
            type="overlay"
            captureGestures={true}
            negotiatePan
            content={<DrawerPanel authentication={this.props.authentication} chosenAPI={this.props.chosenAPI} dispatch={this.props.dispatch}/>}
            key="drawer"
            tapToClose={true}
            openDrawerOffset={0.2} // 20% gap on the right side of drawer
            panCloseMask={0.2}
            onClose={() => this.props.dispatch(Creators.toggleDrawer(false))}
            open={this.props.drawer.show}
            closedDrawerOffset={-3}
            styles={drawerStyles}
            tweenHandler={(ratio) => ({
              main: { opacity:(2-ratio)/2 }
            })}
          >
            <AppWithNavigationState key="navigationComponent"/>
        </Drawer>
      ]
    );
  }
}
RootView.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  authentication: state.authentication,
  chosenAPI: state.api.chosenAPI,
  drawer: state.drawer
});

const ConnectedComponent = connect(mapStateToProps)(RootView);

export default ConnectedComponent;