import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  Image,
  Text,
  AsyncStorage,Alert,Platform
} from 'react-native';

import {KeyboardAvoidingView} from 'react-native';


export default class QuestionScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status:0,
      status1:0,
      status2:1,
      status3:0,
      status4:0,
      status5:0,
      userId:'',

      section1:false,
      section2:false,
      section3:false,
      section4:false,
      section5:false,

    };
  }

  freezeData = () => {
    this.setState({section1:true});
    this.setState({section2:true});
    this.setState({section3:true});
    this.setState({section4:true});
    this.setState({section5:true});

  };

  UnfreezeData = () => {
    this.setState({section1:false});
    this.setState({section2:false});
    this.setState({section3:false});
    this.setState({section4:false});
    this.setState({section5:false});

  };


  async componentDidMount() {
    let var1 =  await AsyncStorage.getItem("userId");
      this.setState({userId:var1});
    this.fetchData();
  };

  async fetchData() {
    let url = "https://youth-apicalls.appspot.com/sankalp/get/user/status/";
      const response = await fetch(url, {
               method: 'POST',
               body: JSON.stringify({
      userId:this.state.userId}),
      });
      const data = await response.json();
      this.setState({demographic_data:data});
      this.setState({status1:data.demographic_data[0].sectionOne});
      this.setState({status2:data.demographic_data[0].sectionTwo  });
      this.setState({status3:data.demographic_data[0].sectionThree});
      this.setState({status4:data.demographic_data[0].sectionFour});
      this.setState({status5:data.demographic_data[0].sectionFive});
      console.log(this.state.status1);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.row1}>
            <TouchableOpacity
              disabled={this.state.section1}
              onPress={() => this.props.navigation.navigate("Section1A")}
              style={styles.button}>
              <Image
               style={{width: 160, height: 162,margin:5,alignSelf: "center", borderRadius:20}}
               source={require('../assets/section1.png')}/>
               {(this.state.status1==0)? <Text style={styles.text3}>Not Started</Text>
               :(this.state.status1==1)?<Text style={styles.text3}>Partial Filled</Text>
               :<Text style={styles.text3}>Completed</Text>}

            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.section2}
              onPress={() => this.props.navigation.navigate("Section2A")}
              style={styles.button}>
              <Image
               style={{width: 160, height: 162,margin:5,alignSelf: "center", borderRadius:20}}
               source={require('../assets/section2.png')}/>
               {(this.state.status2==0)? <Text style={styles.text3}>Not Started</Text>
               :(this.state.status2==1)?<Text style={styles.text3}>Partial Filled</Text>
               :<Text style={styles.text3}>Completed</Text>}
            </TouchableOpacity>
          </View>
          <View style={styles.row1}>
            <TouchableOpacity
            disabled={this.state.section3}
              onPress={() => this.props.navigation.navigate("Section3A")}
              style={styles.button}>
              <Image
               style={{width: 160, height: 162,margin:5,alignSelf: "center", borderRadius:20}}
               source={require('../assets/section3.png')}/>
               {(this.state.status3==0)? <Text style={styles.text3}>Not Started</Text>
               :(this.state.status3==1)?<Text style={styles.text3}>Partial Filled</Text>
               :<Text style={styles.text3}>Completed</Text>}
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.section4}
              onPress={() => this.props.navigation.navigate("Section4")}
              style={styles.button}>
              <Image
               style={{width: 160, height: 162,margin:5,alignSelf: "center", borderRadius:20}}
               source={require('../assets/section4.png')}/>
               {(this.state.status4==0)? <Text style={styles.text3}>Not Started</Text>
               :(this.state.status4==1)?<Text style={styles.text3}>Partial Filled</Text>
               :<Text style={styles.text3}>Completed</Text>}
            </TouchableOpacity>
          </View>

          <View style={styles.row1}>
            <TouchableOpacity
            disabled={this.state.section5}
              onPress={() => this.props.navigation.navigate("Section5A")}
              style={styles.button}>
              <Image
               style={{width: 160, height: 162,margin:5,alignSelf: "center", borderRadius:20}}
               source={require('../assets/section5.png')}/>
               {(this.state.status5==0)? <Text style={styles.text3}>Not Started</Text>
               :(this.state.status5==1)?<Text style={styles.text3}>Partial Filled</Text>
               :<Text style={styles.text3}>Completed</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}>
              <Image
               style={{width: 160, height: 162,margin:5,alignSelf: "center", borderRadius:20}}
               source={require('../assets/details.png')}/>
            </TouchableOpacity>
          </View>

          <View style= {styles.check1234}>
          <TouchableOpacity
          style={styles.back}
          onPress={this.freezeData}
          underlayColor='#fff'>
          <Text style={[styles.submitText1]}>Freeze Data</Text>
          </TouchableOpacity>
            <TouchableOpacity
            style={styles.submit}
            onPress={this.UnfreezeData}
            underlayColor='#fff'>
            <Text style={[styles.submitText1]}>Un Freeze Data</Text>
            </TouchableOpacity>
            </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#079DA8",
  },
  row1: {
    flex:1,
    flexDirection:"row",
    marginTop:10,
    marginBottom:10,
    justifyContent:"center",
  },
  button: {
    width: 170,
    height: 195,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    justifyContent: "center",
    marginRight:10,
    alignSelf:"center",
    marginLeft:10
  },
  text3: {
    color: "#000000",
    fontSize:18,
    alignSelf: "center",
  },
  submitText:{
      color:'#2f2f2f',
      textAlign:'center',
      marginTop:20,
      fontSize:16,
  },
  submitTextGreen:{
      color:'#00ff00',
      textAlign:'center',
      marginTop:20,
      fontSize:16,
  },
  back: {
    marginRight:15,
    marginLeft:10,
    marginTop:20,
    paddingTop:10,
    paddingBottom:10,
    width:160,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submit:{
    marginRight:10,
    marginLeft:15,
    marginTop:20,
    paddingTop:10,
    paddingBottom:10,
    width:160,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText1:{
      color:'#fff',
      textAlign:'center',
      fontSize:20,
  },
  check1234: {
    flexDirection: "row",
    marginLeft:10,
    marginRight:10,
    alignSelf:"center",
    marginTop:20
  },
});
