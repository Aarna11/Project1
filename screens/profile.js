import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';
export default class Profile extends Component {
  constructor() {
    super();
  }
  async addUser() {
    if (this.state.name && this.state.contact) {
      let userData = {
        name: this.state.name,
        contact: this.state.contact
        //created_on: new Date(),
        // author_uid: firebase.auth().currentUser.uid,
      };
    }
  
    let name, contact;
    await firebase
      .database()
      .ref('/Demo/' + Math.random().toString(36).slice(2))
      .set(userData)
      .then(function (data) {});
    this.props.setUpdateToTrue();
    this.props.navigation.navigate('Profile');
    //this.props.setUpdateToTrue();
  };
  

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.inputFont}
            onChangeText={(name) => this.setState({ name })}
            placeholder={'Name'}
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.inputFont}
            onChangeText={(contact) => this.setState({ contact })}
            placeholder={'Contact'}
            placeholderTextColor="black"
          />
          <View style={styles.submitButton}>
            <Button
              onPress={() => this.addUser()}
              title="Submit"
              color="#841584"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputFont: {
    height: RFValue(40),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
