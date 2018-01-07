// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';


import HomeScreen from '../views/HomeScreen';
import FeedScreen from '../views/FeedScreen';
import DetailScreen from '../views/DetailScreen';

export const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Feed: { screen: FeedScreen },
  Detail: { screen: DetailScreen },
});

const AppWithNavigationState = ({ dispatch, navigation}) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navigation})} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
  navigation: state.navigation,

});

export default connect(mapStateToProps)(AppWithNavigationState);