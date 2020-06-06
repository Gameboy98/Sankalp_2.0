import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  AsyncStorage,
  Alert,
  Picker
} from "react-native";

import ModalDropdown from 'react-native-modal-dropdown';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nation: '',
        state: '',
        district: '',
        selectedIndex:"3",
    };
  }

  async fetchData() {
    let url = "https://youth-apicalls.appspot.com/sankalp/post/login/";
      const response = await fetch(url, {
               method: 'POST',
               body: JSON.stringify({
      username:this.state.username,
      password:this.state.password, }),
            });
      const data = await response.json();
      if(data.success == 0){
         alert("Wrong Credentials");
       }else {
         this.props.navigation.navigate("Question1A");
       }
    
  }

  updateIndex (Index) {
   this.setState({selectedIndex:Index})
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
                </View>
                <View style={styles.warn}>
                  <Text style={styles.text1}>Sign Up</Text>
                </View>
                <View style={styles.buttongroup}>
                  <View style={styles.dropLayout}>
                  <ModalDropdown
                    textStyle={styles.text2}
                    style={styles.button2}
                    dropdownStyle={styles.drop1}
                    defaultValue = {"District"}
                    options={data}/>
                  </View>
                  <TouchableOpacity
                    onPress={()=> this.updateIndex(1)}
                    style={styles.button2}
                    underlayColor='#d3d3d3'>
                    <Text style={styles.text2}>State</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={()=> this.updateIndex(2)}
                    style={styles.button2}
                    underlayColor='#d3d3d3'>
                    <Text style={styles.text2}>Nation</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.warn}>
                  {this.state.selectedIndex == 0? <View><Text style={styles.text2}>Contact: </Text><Text style={styles.text1}>districtxyz@sankalp.com</Text><Text style={styles.text1}>0987654321</Text></View> : null}
                  {this.state.selectedIndex == 1? <View><Text style={styles.text2}>Contact: </Text><Text style={styles.text1}>statexyz@sankalp.com</Text><Text style={styles.text1}>0987654321</Text></View> : null}
                  {this.state.selectedIndex == 2? <View><Text style={styles.text2}>Contact: </Text><Text style={styles.text1}>nationxyz@sankalp.com</Text><Text style={styles.text1}>0987654321</Text></View> : null}
                </View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Landing")}
                  style={styles.button}>
                  <Text style={styles.text2}>Submit</Text>
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
    borderRadius: 15,
    backgroundColor: "#ffffff",
    borderColor: "#388E8E",
    borderWidth: 1,
    textAlign: "center",
    marginTop: 29,
    alignSelf: "center"
  },
  image1: {
    alignSelf: "center",
    marginLeft:10,
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
  drop1:{
    width:90,
  },
  button: {
    marginTop:40,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width:307,
  },
  button2: {
    marginTop:40,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width:90,
    marginLeft:10,
    height:45,
  },
  buttongroup: {
    flexDirection:"row",
  },
  image: {
    alignSelf: "center"
  },
  warn: {
    marginTop: 5,
  },
  text1: {
    color: "#ffffff",
    alignSelf: "center",
    fontSize:18,
    marginTop:10,
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    fontSize:22,
  },
  text3: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
  },
  text4: {
    color: "#ffffff",
    alignSelf: "center",
    fontSize: 17,
    marginTop:10,
  },

});

const data = ["Shilong","Kanpur","Noida","Rajasthan","Rajkot"]

