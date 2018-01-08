import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image, StyleSheet, View, ScrollView } from 'react-native';
import { Creators } from '../store/actions/index';
import { List, Card, ListItem, Text } from 'react-native-elements'
import { navigateBack } from '../store/reducers/navigation/index';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitleView: {
    flexDirection: 'row',
  },
  imageStyle: {
    height: 300,
    width: '100%'
  },
  itemStyle: {
    margin: 0,
    padding: 0
  }
});

const BeerDetails = ({navigation, data}) => {
  let info = !data? {} : data;
  return (
  <ScrollView>
      <Card title={info.name}>
        <View style={styles.user}>
          <Image
            style={styles.imageStyle}
            resizeMode="cover"
            source={{ uri: info.image_url }}
          />
          <Text>{info.description}</Text>
        </View>
      </Card>
    </ScrollView>
);
}
BeerDetails.propTypes = {
  
};

export default BeerDetails;