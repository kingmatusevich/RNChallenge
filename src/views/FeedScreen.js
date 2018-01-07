import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { Creators } from '../store/actions/index';
import DogFeedList from '../components/DogFeedList';
import { connect } from 'react-redux';

class FeedScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
    title: 'Feed',
    headerLeft:<Icon size={30} name="menu" onPress={() => navigation.dispatch(Creators.toggleDrawer())} containerStyle={{marginLeft: 10}} color="black" underlayColor="grey"/>
  }
};

componentDidMount() {
  
}

  render () {
    let {navigation, api} = this.props;
    console.log('api received', api);
    if (api.chosenAPI === 'dogs') {
      return (
        <DogFeedList navigation={navigation} items={api.items} favorites={api.currentFavorites}/>
      );
    } else {
      return null
    }

  }
};

FeedScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  api: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  api: state.api
});

export default connect(mapStateToProps)(FeedScreen);