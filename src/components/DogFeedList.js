import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Creators } from '../store/actions/index';
import { List, ListItem } from 'react-native-elements'
import { navigateBack } from '../store/reducers/navigation/index';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const FeedList = ({navigation, items, favorites}) => (
  <ScrollView>
      <List containerStyle={{marginTop: -0}}>
      {
        !items ? null : items.filter(i =>!!favorites.find(e => e.itemId == i)).map((l, i) => (
          <ListItem
            key={i}
            title={l}
            leftIcon={{name: "star"}}
            underlayColor="#e8ebef"
            onPress={() => navigation.dispatch(Creators.navigateDetail(l))}
          />
        ))
      }
      {
        !items ? null : items.filter(i => !favorites.find(e => e.itemId == i)).map((l, i)=> (
          <ListItem
            key={i}
            title={l}
            underlayColor="#e8ebef"
            onPress={() => navigation.dispatch(Creators.navigateDetail(l))}
          />
        ))
      }
    </List>
    </ScrollView>
);

FeedList.propTypes = {
  
};

export default FeedList;