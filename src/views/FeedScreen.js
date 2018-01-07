import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { Creators } from '../store/actions/index';
import FeedList from '../components/FeedList';

class FeedScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
    title: 'Feed',
    headerLeft:<Icon size={30} name="menu" onPress={() => navigation.dispatch(Creators.toggleDrawer())} containerStyle={{marginLeft: 10}} color="black" underlayColor="grey"/>
  }
};

  render () {
    let {navigation} = this.props;
    return (
          <FeedList navigation={navigation}/>
    );
  }
};

export default FeedScreen;