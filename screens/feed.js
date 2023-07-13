import React, { Component } from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import firebase from 'firebase';
export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      donors:[],
      name: null,
      contact: null
    };
  }
  componentDidMount(){
    this.fetchStories();
  }
    fetchStories = () => {
    firebase
      .database()
      .ref("/Demo/")
      .on(
        "value",
        snapshot => {
          let donors= [];
          if (snapshot.val()) {
            Object.keys(snapshot.val()).forEach(function (key) {
              donors.push({
                key: key,
                value: snapshot.val()[key]
              });
            });
          }
          this.setState({ donors:donors });
         //this.props.setUpdateToFalse();
        },
        function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        }
      );
  };
  renderItem = ({ item: donors }) => {
    return (
      <View>
      <Text>{donors.name}</Text>
      <Text>{donors.contact}</Text>
      </View>
    );
  };
  keyExtractor = (item, index) => index.toString();
  render() {
    return(
      <View>
      <FlatList
      keyExtractor={this.keyExtractor}
      data={this.donors}
      renderItem={this.renderItem}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
