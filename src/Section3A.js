import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  Image,
  AsyncStorage,Alert,
  CheckBox,
  Text,Platform,KeyboardAvoidingView
} from 'react-native';


var radio_props = [
      {label: 'Yes', value: 1 },
      {label: 'No', value: 0 }
];

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


export default class Section3ABC extends Component {
  constructor(props) {
    super(props);
    this.state = {
        opt3a: 2,
        opt3a1: 2,
        opt3a2: '',
        opt3a3: '',
        status:true,

    };
  }

  toggleStatus(value){
    this.setState({
      opt3a:value

    });

  }

  toggleStatus1(value){
    this.setState({
      opt3a1:value

    });

  }

  async fetchData() {
    let url = "https://youth-apicalls.appspot.com/sankalp/add/demographic/section/three/";
      const response = await fetch(url, {
               method: 'POST',
               body: JSON.stringify({
      userId:this.state.userId,

      populationTotalA: this.state.populationTotalA,
      populationFemaleA: this.state.populationFemaleA,
      populationCasteA: this.state.populationCasteA,
      populationTribeA: this.state.populationTribeA,
      populationPwdA: this.state.populationPwdA,

      populationTotalB: this.state.populationTotalB,
      populationFemaleB: this.state.populationFemaleB,
      populationCasteB: this.state.populationCasteB,
      populationTribeB: this.state.populationTribeB,
      populationPwdB: this.state.populationPwdB,

    }),  });

      const data = await response.json();
      console.log("SomeLog",data);
       if(data.response.confirmation == 1){
           this.props.navigation.navigate("Section1B");
        }else {
        alert("Somethin Went Wrong");
        }
  }


  CheckTextInput = () => {


        this.props.navigation.navigate("Section3B");

  };


  render() {
    return (
      <ScrollView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
      <KeyboardAvoidingView behavior="padding" enabled>
          <View>
            <View style={styles.question}>
              <View style={styles.check1}>
                <View style={styles.check123}>
                <Text style={styles.text2}>3. </Text>
                <Text style={styles.text23}>Demand and supply mapping for short term skill development</Text>
                </View>
                <View style={styles.check1}>
                <View style={styles.check21}>
                <Text style={styles.text21}>3 (A) </Text>
                <Text style={styles.text1}>Has the district completed a district skill gap study in the last three years</Text>
                </View>
                <View style={styles.check}>
                <RadioForm labelColor={'#ffffff'} labelStyle={{fontSize: 20, color: '#ffffff', marginLeft:20, marginRight:80}} selectedButtonColor={'#ffffff'} radio_props={radio_props} buttonColor={'#ffffff'} formHorizontal={true} initial={2} onPress={(value) => this.toggleStatus(value)}/>
                </View>
                </View>
              </View>


              {(this.state.opt3a==0)?
                <View style={styles.check1}>
                <View style={styles.check21}>
                <Text style={styles.text21}>3 (A1) </Text>
                <Text style={styles.text1}>Is a District Skill-gap study is nearing completion? (likely to be completed in next 2 months)</Text>
                </View>
                <View style={styles.check}>
                <RadioForm labelColor={'#ffffff'} labelStyle={{fontSize: 20, color: '#ffffff', marginLeft:20, marginRight:80}} selectedButtonColor={'#ffffff'} radio_props={radio_props} buttonColor={'#ffffff'} formHorizontal={true} initial={2} onPress={(value) => this.toggleStatus1(value)}/>
                </View>
                </View> : null}

                { (this.state.opt3a==1 || this.state.opt3a1==1) ?

                  <View style={styles.check1}>

                  <View style={styles.check21}>
                  <Text style={styles.text21}>3 (A2) </Text>
                  <Text style={styles.text1}>Does the skill-gap study include analysis of Sector Skill Council represented primary sector-based analysis of migration within the State ?</Text>
                  </View>
                  <View style={styles.check}>
                  <RadioForm labelColor={'#ffffff'} labelStyle={{fontSize: 20, color: '#ffffff', marginLeft:20, marginRight:80}} selectedButtonColor={'#ffffff'} radio_props={radio_props} buttonColor={'#ffffff'} formHorizontal={true} initial={2} onPress={(value) => {this.setState({opt3a2:value})}}/>
                  </View>
                  </View>: null}

               { (this.state.opt3a==1 || this.state.opt3a1==1) ?
                <View style={styles.check1}>
                <View style={styles.check21}>
                <Text style={styles.text21}>3 (A3) </Text>
                <Text style={styles.text1}>Does the skill-gap study include analysis of Sector Skill Council represented primary sector-based analysis of migration to other States ?</Text>
                </View>
                <View style={styles.check}>
                <RadioForm labelColor={'#ffffff'} labelStyle={{fontSize: 20, color: '#ffffff', marginLeft:20, marginRight:80}} selectedButtonColor={'#ffffff'} radio_props={radio_props} buttonColor={'#ffffff'} formHorizontal={true} initial={2} onPress={(value) => {this.setState({opt3a3:value})}}/>
                </View>
                </View>:null}

                <Text   style={{marginTop: 30, color: "#ffffff",fontSize:18,alignSelf: "center",}}>( 1 / 20 )</Text>

                <View style={styles.check1234}>
                  <TouchableOpacity
                  style={styles.submit}
                  onPress={this.CheckTextInput}
                  underlayColor='#fff'>
                  <Text style={[styles.submitText]}>Submit & Next</Text>
                  </TouchableOpacity>
                  </View>

              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#079DA8",
  },
  question: {
    flex:1,
    margin:10,
    marginLeft:10,
    marginRight:10,
    marginBottom:30
  },
  check1:{
    flexDirection:"column",
  },
  check2:{
    flexDirection:"row",
    marginTop:-10,
  },
  check21:{
    flexDirection:"row",
    margin:10,
  },
  check123: {
    flexDirection: "row",
    marginLeft:5,
  },
  check:{
    marginTop:20,
    marginLeft:75,
    width:20,
    height:20,
  },
  ques:{
    width:"90%",
    padding:5,
    marginRight:5,
  },
  textInput: {
    width: 320,
    height: 50,
    color: "#121212",
    borderRadius: 15,
    borderColor: "#ffffff",
    borderWidth: 1,
    textAlign: "center",
    marginTop: 40,
    alignSelf: "center",
    backgroundColor:"#ffffff",
  },
  text1: {
    color: "#ffffff",
    fontSize:16,
    alignSelf: "center",
    marginTop:20,
    marginLeft:5,
    width:"85%",
    marginRight:15
  },
  text2: {
    color: "#a9a9a9",
    fontSize:25,

  },
  text21: {
    color: "#a9a9a9",
    fontSize:16,
    marginTop:20,
    marginLeft:15,

  },
  text23: {
    color: "#ffffff",
    fontSize:22,
    width:"95%",
  },
  text3: {
    color: "#ffffff",
    fontSize:22,
    alignSelf: "center",
  },
  text4: {
    color: "#ffffff",
    fontSize:18,
    alignSelf: "center",
    marginTop:60,
    marginLeft:10,
  },
  tittle: {
    color: "#ffffff",
  },
  check1234: {
    marginLeft:10,
    marginRight:10,
    marginTop:20
  },
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
      color:'#fff',
      textAlign:'center',
      fontSize:20,
  },
});
