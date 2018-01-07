import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import DogPicturesList from '../components/DogPicturesList';
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

const DetailScreen = ({ navigation, api }) => {
    console.log('api received', api);
    if (api.chosenAPI === 'dogs') {
      return (
        <DogPicturesList navigation={navigation} items={api.currentItem}/>
      );
    }
  };

DetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

DetailScreen.navigationOptions = ({navigation}) => {
  
  return {
    title: navigation.state.params.itemId,
    mode: 'card',
    headerBackTitle: "Back"
  };
}

DetailScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  api: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  api: state.api
});

export default connect(mapStateToProps)(DetailScreen);