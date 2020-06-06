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


export default class Section1A extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.navigation.getParam('userId', ''),
      populationTotalA: '',
      populationFemaleA: '',
      populationCasteA: '',
      populationTribeA: '',
      populationPwdA: '',

      populationTotalB: "",
      populationFemaleB: "",
      populationCasteB: "",
      populationTribeB: "",
      populationPwdB: "",
      userId:''
    };
  }

  async componentDidMount() {
    let var1 =  await AsyncStorage.getItem("Screen1A1");
    let var2 =  await AsyncStorage.getItem("Screen1A2");
    let var3 =  await AsyncStorage.getItem("Screen1A3");
    let var4 =  await AsyncStorage.getItem("Screen1A4");
    let var5 =  await AsyncStorage.getItem("Screen1A5");
    let userId =  await AsyncStorage.getItem("userId");
    this.setState({userId:var1});
    this.setState({populationTotalA:var1});
    this.setState({populationFemaleA:var2});
    this.setState({populationCasteA:var3});
    this.setState({populationTribeA:var4});
    this.setState({populationPwdA:var5});
    this.setState({userId:userId});

    this.fetchSavedData();
}

async fetchSavedData() {
  let url = "https://youth-apicalls.appspot.com/sankalp/get/demographic/data/one/";
    const response = await fetch(url, {
             method: 'POST',
             body: JSON.stringify({
    userId:this.state.userId,
  }),  });

    const data = await response.json();
     if(data.success == 1){
         this.setState({populationTotalA:data.demographic_data[0].populationTotalA});
         this.setState({populationFemaleA:data.demographic_data[0].populationFemaleA});
         this.setState({populationCasteA:data.demographic_data[0].populationCasteA});
         this.setState({populationTribeA:data.demographic_data[0].populationTribeA});
         this.setState({populationPwdA:data.demographic_data[0].populationPwdA});

         this.setState({populationTotalB:data.demographic_data[0].populationTotalB});
         this.setState({populationFemaleB:data.demographic_data[0].populationFemaleB});
         this.setState({populationCasteB:data.demographic_data[0].populationCasteB});
         this.setState({populationTribeB:data.demographic_data[0].populationTribeB});
         this.setState({populationPwdB:data.demographic_data[0].populationPwdB});

      }else {
      alert("Somethin Went Wrong");
      }
}


  CheckTextInput = () => {
    var total = parseInt(this.state.populationTotalB, 10 );
    var female = parseInt(this.state.populationFemaleB, 10 );
    var sc = parseInt(this.state.populationCasteB, 10 );
    var st = parseInt(this.state.populationTribeB, 10 );
    var pwd = parseInt(this.state.populationPwdB, 10 );

    var totalA = parseInt(this.state.populationTotalA, 10 );
    var femaleA = parseInt(this.state.populationFemaleA, 10 );
    var scA = parseInt(this.state.populationCasteA, 10 );
    var stA = parseInt(this.state.populationTribeA, 10 );
    var pwdA = parseInt(this.state.populationPwdA, 10 );

    if (this.state.populationTotalB == '' || this.state.populationFemaleB == '' || this.state.populationCasteB == '' || this.state.populationTribeB == '' || this.state.populationPwdB == '') {
        alert('Please Enter Fields ');
      } else{
        if (total < female) {
          alert("Female Population cannot be more than the Total Population");
        } else {
          if (total < sc) {
            alert("SC Population cannot be more than the Total Population");
          } else {
            if (total < st) {
              alert("T Population cannot be more than the Total Population");
            } else {
              if (total < (st + sc)) {
                alert("Total of SC and ST Population cannot be more than the Total Population");
              } else {
                if (total < pwd) {
                  alert("TPWD Population cannot be more than the Total Population");
                } else {
                  if(total>totalA ){
                  alert("The Total(Youth) cannot be more than the total working Population (As in 1A)");
                 }else if(female>femaleA) {
                  alert("The Female(Youth) cannot be more than the Female working Population (As in 1A)");
                 }else if(sc>scA){
                  alert("The SC(Youth) cannot be more than the SC working Population (As in 1A)");
                 }else if(st>stA){
                  alert("The ST(Youth) cannot be more than the ST working Population (As in 1A)");
                 }else if(pwd>pwdA) {
                  alert("The PWD(Youth) cannot be more than the PWD working Population (As in 1A)");
                 }
                 else {
                  this.fetchData();                 }
                }
              }
            }
          }
        }
      }
  };

  async fetchData() {
    let url = "https://youth-apicalls.appspot.com/sankalp/add/demographic/data/section/one/";
      const response = await fetch(url, {
               method: 'POST',
               body: JSON.stringify({

      userId:this.state.userId,
      populationTotalA:this.state.populationTotalA,
      populationFemaleA:this.state.populationFemaleA,
      populationCasteA:this.state.populationCasteA,
      populationTribeA:this.state.populationTribeA,
      populationPwdA:this.state.populationPwdA,

      populationTotalB:this.state.populationTotalB,
      populationFemaleB:this.state.populationFemaleB,
      populationCasteB:this.state.populationCasteB,
      populationTribeB:this.state.populationTribeB,
      populationPwdB:this.state.populationPwdB, }),

            });
      const data = await response.json();
       if(data.response.confirmation == 1){
          this.props.navigation.navigate("Question");
        }else {
          alert("Somethin Went Wrong");
        }
  }

  render() {
    return (
      <ScrollView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
      <KeyboardAvoidingView behavior="padding" enabled>
          <View>
            <View style={styles.question}>
              <View style={styles.check1}>
                <View style={styles.check123}>
                <Text style={styles.text2}>1. </Text>
                <Text style={styles.text23}>  Demographic Data</Text>
                </View>
                <View style={styles.check1}>
                <View style={styles.check21}>
                <Text style={styles.text21}>1 (B) </Text>
                <Text style={styles.text1}>Working Age Population (Youth, 15 to 35 years)</Text>
                </View>
                </View>
                <Text style={styles.text10}>Total Population</Text>
                <TextInput placeholder="Total Population" style={styles.textInput}  returnKeyType="done"
                keyboardType="numeric" value={this.state.populationTotalB} onChangeText={(text) => this.setState({populationTotalB: text}) } />
               <Text style={styles.text10}>Female Population</Text>
              <TextInput placeholder="Female Population" style={styles.textInput}  returnKeyType="done"
                keyboardType="numeric" value={this.state.populationFemaleB} onChangeText={(text) => this.setState({populationFemaleB: text}) }/>
              <Text style={styles.text10}>SC Population</Text>
              <TextInput placeholder="SC Population" style={styles.textInput}  returnKeyType="done"
                keyboardType="numeric" value={this.state.populationCasteB} onChangeText={(text) => this.setState({populationCasteB: text}) }/>
              <Text style={styles.text10}>ST Population</Text>
              <TextInput placeholder="ST Population" style={styles.textInput}  returnKeyType="done"
                keyboardType="numeric" value={this.state.populationTribeB} onChangeText={(text) => this.setState({populationTribeB: text}) }/>
              <Text style={styles.text10}>PWD Population</Text>
              <TextInput placeholder="PWD Population" style={styles.textInput}  returnKeyType="done"
                keyboardType="numeric" value={this.state.populationPwdB} onChangeText={(text) => this.setState({populationPwdB: text}) }/>
              </View>
                <Text   style={{marginTop: 30, color: "#ffffff",fontSize:18,alignSelf: "center",}}>( 2 / 2 )</Text>

                <View style= {styles.check1234}>
                <TouchableOpacity
                style={styles.back}
                onPress={() => this.props.navigation.navigate("Section1A")}
                underlayColor='#fff'>
                <Text style={[styles.submitText]}>Back</Text>
                </TouchableOpacity>
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
    marginTop: 10,
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
  text10: {
    color: "#ffffff",
    fontSize:16,
    alignSelf: "center",
    marginTop:30,
    marginLeft:25,
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

  back: {
    marginRight:3,
    marginLeft:30,
    marginTop:20,
    paddingTop:10,
    paddingBottom:10,
    width:142,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submit:{
    marginRight:40,
    marginLeft:3,
    marginTop:20,
    paddingTop:10,
    paddingBottom:10,
    width:162,
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
  check1234: {
    flexDirection: "row",
    marginLeft:10,
    marginRight:10,
    marginTop:20
  },
});
