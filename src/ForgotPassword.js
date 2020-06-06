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

export default class ForgotPasswordScreen extends Component {

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
                </View>
                <View style={styles.warn}>
                  <Text style={styles.text1}>Forgot Password, Contact:</Text>
                </View>
                <View style={styles.textInput}>
                  <Text style={styles.textInput1}>Sankalp@ipeglobal.com</Text>
                </View>
                <View style={styles.textInput1}>
                  <Text style={styles.textInput1}>+91 (123)-4567890</Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Landing")}
                  style={styles.button}>
                  <Text style={styles.text2}>Go Back</Text>
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
    marginTop:-50,
    width: 321,
    height: 428,
    backgroundColor: "#079DA8",
  },
  textInput: {
    width: 307,
    height: 50,
    color: "#121212",
    textAlign: "center",
    marginTop: 29,
    alignSelf: "center"
  },
  textInput1: {
    color: "#ffffff",
    textAlign: "center",
    alignSelf: "center",
    fontSize:18,
  },
  image1: {
    alignSelf: "center",
    marginLeft:10,
  },
  button: {
    marginTop:60,
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
    marginTop: 10,
    marginRight: 174
  },
  image: {
    alignSelf: "center"
  },
  logo:{
    flexDirection: "row",
    marginTop:-120,
    height:132,
    marginLeft:60,
  },
  logo1:{
    marginLeft:-40,
  },
  logo2:{
    marginLeft:100,
  },
  warn: {
    marginTop: 20,
  },
  text1: {
    color: "#ffffff",
    alignSelf: "center",
    fontSize:22,
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontSize:22,
  },
  text3: {
    color: "#ffffff",
    justifyContent: "space-between",
    marginBottom: 4,
    marginLeft: 11
  },
  text4: {
    color: "#ffffff",
    alignSelf: "center",
    fontSize: 17,
    marginTop:70,
  },

});
