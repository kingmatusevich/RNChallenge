import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Creators } from '../store/actions/index';
import { List, ListItem } from 'react-native-elements'
import { navigateBack } from '../store/reducers/navigation/index';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitleView: {
    flexDirection: 'row',
  },
  ratingImage: {
    height: 300,
    width: '100%'
  },
  itemStyle: {
    margin: 0,
    padding: 0
  }
});

const DogPicturesList = ({navigation, items}) => (
  <ScrollView>
      <List containerStyle={{marginTop: -0}}>
      {
        !items ? null:  items.slice(0, 15).map((l, i) => (
          <ListItem
            key={i}
            hideChevron
            resizeMode={'cover'}
            containerStyle={styles.itemStyle}
            wrapperStyle={styles.itemStyle}

            subtitle={ 
              <View style={styles.subtitleView}>
                <Image source={{uri: l}} style={styles.ratingImage}/>
              </View>
            }
            underlayColor="#e8ebef"
          />
        ))
      }
    </List>
    </ScrollView>
);

DogPicturesList.propTypes = {
  
};

export default DogPicturesList;