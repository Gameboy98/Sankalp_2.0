import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  AsyncStorage,Alert
} from "react-native";
//import Spinner from 'react-native-loading-spinner-overlay';
import PasswordInputText from 'react-native-hide-show-password-input';

export default class SampleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
        userId: '',
    };
  }

    async componentDidMount() {
      this.store();
};

  async store() {
    try {
       await AsyncStorage.setItem("userData","");
       await AsyncStorage.setItem("isLogIn","0");
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  CheckTextInput = () => {
    if (this.state.username == '' || this.state.password == '') {
        alert('Please Enter Fields');
      } else {
        this.fetchData();
      }
  };

  async fetchData() {
    let url = "https://youth-apicalls.appspot.com/sankalp/post/login/";
      const response = await fetch(url, {
               method: 'POST',
               body: JSON.stringify({
      username:this.state.username,
      password:this.state.password, }),
      });
      const data = await response.json();
      if(data.success == 1){
         this.setState({ userId: data.datasets[0].id });
         this.props.navigation.navigate("Question");
         this.storeData(data);
       }else {
          alert("Wrong Credentials");
       }
  }

  async storeData(response) {
    try {
        await AsyncStorage.setItem("userData",JSON.stringify(response));
        await AsyncStorage.setItem("isLogIn","1");
        await AsyncStorage.setItem("userId",JSON.stringify(this.state.userId));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
         style={{width: 264, height: 100, alignSelf:"center"}}
         source={require('../assets/download.png')}/>
        <TextInput placeholder="Enter Username" underlineColorAndroid="transparent" style={styles.textInput}
          keyboardType="email-address"
          onChangeText={(text) => this.setState({username: text}) }/>
        <TextInput placeholder="Enter Password" underlineColorAndroid="transparent" secureTextEntry style={styles.textInput}
          keyboardType="email-address"
          onChangeText={(text) => this.setState({password: text}) }/>
        <TouchableOpacity
          onPress={this.CheckTextInput}
          style={styles.button}>
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    width:"100%",
    marginTop: 50,
    alignSelf: "center",
    justifyContent: 'center',
  },
  textInput: {
    width: 307,
    height: 50,
    color: "#121212",
    borderRadius: 15,
    backgroundColor: "#ffffff",
    borderColor: "#BA2727",
    borderWidth: 1,
    marginTop: 40,
    alignSelf: "center",
    textAlign:"center",
  },
  button: {
    marginTop:40,
    backgroundColor:'#BA2727',
    borderRadius:10,
    width:307,
    alignSelf:"center",
    justifyContent: 'center',
    height:50,
  },
  image: {
    alignSelf: "center"
  },
  text: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontSize:22,
  },
});
