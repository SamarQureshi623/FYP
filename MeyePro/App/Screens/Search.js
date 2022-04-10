import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import React, {useState} from 'react';

const Search = () => {
  const [Items, setItems] = useState([
    {name: 'Mr Amir'},
    {name: 'Mr Ihsan'},
    {name: 'Mr Shahid Jameel'},
    {name: 'Mr Shahid Abid'},
    {name: 'Mr Umer'},
    {name: 'Ms Kainat'},
    {name: 'Ms Sadaf'},
    {name: 'Ms Jannat'},
    {name: 'Ms Riffat'},
    {name: 'Ms Marium'},
    {name: 'Ms Nadia'},
    {name: 'Ms sanam '},
  ]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {name: 'Item 9'}]);
    setRefreshing(false);
  };
  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={Items}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onrefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }
    />
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    //alignItems:'center',
    //justifyContent:'center',
  },
  item: {
    margin: 10,
    backgroundColor: '#5499C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    height: 150,
    width: 150,
    backgroundColor: '#f0fcfc',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    margin: 10,
    borderRadius: 20,
  },

  text: {
    color: '#ffffff',
    fontSize: 20,
    margin: 10,
    //backgroundColor:'#000000',
    alignItems: 'center',
  },
});
export default Search;
