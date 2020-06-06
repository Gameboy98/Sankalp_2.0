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

export default class LandingScreen extends Component {
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
            <View style={styles.group}>
              <View style={styles.rect}>
                <View style={styles.image}>
                  <View style={styles.logo}>
                    <View style={styles.logo1}>
                     <Image
                      style={{width: 150, height: 60}}
                      source={require('../assets/logo1.png')}/>
                    </View>
                    <View style={styles.logo2}>
                     <Image
                      style={{width: 66, height: 50}}
                      source={require('../assets/logo2.png')}/>
                    </View>
                  </View>
                  <View style={styles.image1}>
                    <Image
                     style={{width: 264, height: 100}}
                     source={require('../assets/sankalp.png')}/>
                  </View>
                  <Text style={styles.text3}>Planning and Budgeting</Text>
                </View>
                <TextInput placeholder="Enter Username" underlineColorAndroid="transparent" style={styles.textInput}
                  keyboardType="email-address"
                  onChangeText={(text) => this.setState({username: text}) }/>
                <TextInput placeholder="Enter Password" underlineColorAndroid="transparent" secureTextEntry style={styles.textInput}
                  keyboardType="email-address"
                  onChangeText={(text) => this.setState({password: text}) }/>
                <View style={styles.Horizon}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("ForgotPassword")}
                    style={styles.button2}>
                    <Text style={styles.text5}>Forgot Password?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("SignUp")}
                    style={styles.button2}>
                      <Text style={styles.text5}>New User ? Sign Up</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={this.CheckTextInput}
                  style={styles.button}>
                  <Text style={styles.text2}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.warn}>
                  <Text style={styles.text4}>Supported by: The World Bank</Text>
                </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#079DA8",
  },
  group: {
    width: 321,
    height: 288,
    marginTop: 200,
    alignSelf: "center"
  },
  rect: {
    marginTop:-70,
    width: 321,
    height: 428,
    backgroundColor: "#079DA8",
  },
  textInput: {
    paddingLeft:10,
    width: 307,
    height: 50,
    color: "#121212",
    borderRadius: 15,
    backgroundColor: "#ffffff",
    borderColor: "#388E8E",
    borderWidth: 1,
    marginTop: 39,
    alignSelf: "center",
    textAlign:"center",
  },
  textInputp: {
    marginTop:-11,
    textAlign:"center",
    marginRight:10,
    marginLeft:10,
    justifyContent:"center",
  },
  button: {
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width:307,
  },
  button2: {
    height: 23,
    backgroundColor: "#079DA8",
    marginTop: 20,
    marginRight: 30
  },
  Horizon:{
    flexDirection:"row",
  },
  image: {
    alignSelf: "center"
  },
  image1: {
    alignSelf: "center",
    marginLeft:10,
  },
  logo:{
    flexDirection: "row",
    marginTop:-100,
    height:132,
    marginLeft:60,
  },
  logo1:{
    marginLeft:-40,
    marginRight:10,
  },
  logo2:{
    marginLeft:100,
    marginRight:20,
  },
  warn: {
    marginTop: 20,
  },
  text1: {
    color: "#ffffff",
    alignSelf: "center",
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontSize:22,
  },
  text3: {
    color: "#ffffff",
    fontSize:18,
    justifyContent: "space-between",
    marginBottom: 4,
    marginLeft: 11,
    textAlign:"center"
  },
  text4: {
    color: "#ffffff",
    alignSelf: "center",
    fontSize: 17,
  },
  text5: {
    color: "#ffffff",
    justifyContent: "space-between",
    marginBottom: 4,
    marginLeft: 11,
    textAlign:"center"
  },

});
