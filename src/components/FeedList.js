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

const FeedList = ({navigation, items}) => (
  <ScrollView>
      <List containerStyle={{marginTop: -0}}>
      {
        items.map((l, i) => (
          <ListItem
            key={i}
            title={l}
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