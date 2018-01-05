import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Creators } from '../store/actions/index';
import Drawer from 'react-native-drawer';
import DrawerPanel from '../components/DrawerPanel';
import FeedList from '../components/FeedList';
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

const FeedScreen = ({ navigation }) => (
    <Drawer
    type="overlay"
    content={<DrawerPanel />}
    tapToClose={true}
    openDrawerOffset={0.2} // 20% gap on the right side of drawer
    panCloseMask={0.2}
    open={true}
    closedDrawerOffset={-3}
    styles={drawerStyles}
    tweenHandler={(ratio) => ({
      main: { opacity:(2-ratio)/2 }
    })}
    >
      <FeedList navigation={navigation}/>
  </Drawer>
);

FeedScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

FeedScreen.navigationOptions = {
  title: 'Feed',
};

export default FeedScreen;