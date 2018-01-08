import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, NetInfo, ActivityIndicator } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import DogPicturesList from '../components/DogPicturesList';
import BeerDetails from '../components/BeerDetails';
import { Creators } from '../store/actions/index';
import { navigateBack } from '../store/reducers/navigation/index';
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

class DetailScreen extends React.Component {

  componentWillUpdate (nextProps) {
    let currentId = nextProps.api.currentItemId;
    if (currentId != this.props.api.currentItemId || nextProps.api.allFavorites != this.props.api.allFavorites) {
      this.updateFavoriteStatus(this.calculateFavoriteStatus(nextProps))
    }
  }

  updateFavoriteStatus = (nextValue) => {
      this.props.navigation.setParams({...this.props.navigation.state.params, isFavorite: nextValue })
  }

  calculateFavoriteStatus = (props) => {
    let currentId = props.api.currentItemId;
    let currentFavorites = props.api.allFavorites;
    let currentFind = currentFavorites.find(e => e.itemId == currentId);
    return !currentFind? false: true;
  }
  
  componentDidMount() {
    this.updateFavoriteStatus(this.calculateFavoriteStatus(this.props))
  }

  render () {
    let {api, navigation} = this.props;
    console.log('api received', api);
    if (api.loading) return <View style={{marginTop: 10}}><ActivityIndicator size="large"/></View>;
    if (api.chosenAPI === 'dogs') {
      return (
        <DogPicturesList navigation={navigation} items={api.currentItem}/>
      );
    } else if (api.chosenAPI === 'beers') {
      return (
        <BeerDetails navigation={navigation} data={api.currentItem} />
      )
    }
  };
}

DetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

DetailScreen.navigationOptions = ({navigation}) => {
  let itemId = navigation.state.params.itemId;
  let action = !navigation.state.params.isFavorite ? Creators.favoriteAdd(itemId) : Creators.favoriteRemove(itemId);
  let currentIcon = !navigation.state.params.isFavorite ? "star-border": "star";
  return {
    title: navigation.state.params.title,
    mode: 'card',
    headerRight:<Icon size={30} name={currentIcon} onPress={() => navigation.dispatch(action)} containerStyle={{marginRight: 10}} color="black" underlayColor="grey"/>
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