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


export default class Section2C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.navigation.getParam('userId', ''),
      populationTotal2A: "",
      populationFemale2A: "",
      populationCaste2A: "",
      populationTribe2A: "",
      populationPwd2A: "",

      populationTotal2B: "",
      populationFemale2B: "",
      populationCaste2B: "",
      populationTribe2B: "",
      populationPwd2B: "",

      populationTotal2C: "",
      populationFemale2C: "",
      populationCaste2C: "",
      populationTribe2C: "",
      populationPwd2C: "",

      populationTotal2D: "",
      populationFemale2D: "",
      populationCaste2D: "",
      populationTribe2D: "",
      populationPwd2D: "",

      userId:'',
      status:0,
      status2:0
    };
  }

  async componentDidMount() {

    let var1 =  await AsyncStorage.getItem("Screen2A1");
    let var2 =  await AsyncStorage.getItem("Screen2A2");
    let var3 =  await AsyncStorage.getItem("Screen2A3");
    let var4 =  await AsyncStorage.getItem("Screen2A4");
    let var5 =  await AsyncStorage.getItem("Screen2A5");

    let var6 =  await AsyncStorage.getItem("Screen2B1");
    let var7 =  await AsyncStorage.getItem("Screen2B2");
    let var8 =  await AsyncStorage.getItem("Screen2B3");
    let var9 =  await AsyncStorage.getItem("Screen2B4");
    let var10 =  await AsyncStorage.getItem("Screen2B5");

    this.setState({populationTotal2A:var1});
    this.setState({populationFemale2A:var2});
    this.setState({populationCaste2A:var3});
    this.setState({populationTribe2A:var4});
    this.setState({populationPwd2A:var5});

    this.setState({populationTotal2B:var6});
    this.setState({populationFemale2B:var7});
    this.setState({populationCaste2B:var8});
    this.setState({populationTribe2B:var9});
    this.setState({populationPwd2B:var10});

    let var11 =  await AsyncStorage.getItem("userId");
    this.setState({userId:var11});
    this.fetchSavedData();

}

toggleStatus(index,value){
  this.setState({
    status:index,
    populationCaste2C:value

  });

}

toggleStatus2(index,value){
  this.setState({
    status2:index,
    populationTribe2C:value

  });

}

  async storeData() {
    try {
        await AsyncStorage.setItem("Screen2C1",this.state.populationTotal2C);
        await AsyncStorage.setItem("Screen2C2",this.state.populationFemale2C);
        await AsyncStorage.setItem("Screen2C3",this.state.populationCaste2C);
        await AsyncStorage.setItem("Screen2C4",this.state.populationTribe2C);
        await AsyncStorage.setItem("Screen2C5",this.state.populationPwd2C);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  async fetchData() {
    let url = "https://youth-apicalls.appspot.com/sankalp/add/demographic/section/two/";
      const response = await fetch(url, {
               method: 'POST',
               body: JSON.stringify({
      userId:this.state.userId,
      populationoverallA:this.state.populationTotal2A,
      populationoverallFemaleA:this.state.populationFemale2A,
      populationoverallCastA:this.state.populationCaste2A,
      populationoverallTribeA:this.state.populationTribe2A,
      populationoverallPwdA:this.state.populationPwd2A,

      populationoverallB:this.state.populationTotal2B,
      populationoverallFemaleB:this.state.populationFemale2B,
      populationoverallCastB:this.state.populationCaste2B,
      populationoverallTribeB:this.state.populationTribe2B,
      populationoverallPwdB:this.state.populationPwd2B,

      populationoverallC:this.state.populationTotal2C,
      populationoverallFemaleC:this.state.populationFemale2C,
      populationoverallCastC:this.state.populationCaste2C,
      populationoverallTribeC:this.state.populationTribe2C,
      populationoverallPwdC:this.state.populationPwd2C,

      populationoverallD:this.state.populationTotal2D,
      populationoverallFemaleD:this.state.populationFemale2D,
      populationoverallCastD:this.state.populationCaste2D,
      populationoverallTribeD:this.state.populationTribe2D,
      populationoverallPwdD:this.state.populationPwd2D,

    }),  });
      const data = await response.json();

      if(data.response.confirmation == 1){
          alert("Kindly reflect on DSDP components ‘K’ to ‘N’.")
          this.props.navigation.navigate("Section2D");
       }else {
       alert("Somethin Went Wrong");
       }
  }

  async fetchSavedData() {
    let url = "https://youth-apicalls.appspot.com/sankalp/get/employment/data/two/";
      const response = await fetch(url, {
               method: 'POST',
               body: JSON.stringify({
      userId:this.state.userId,
    }),  });

      const data = await response.json();
       if(data.success == 1){
           this.setState({populationTotal2A:data.employment_data[0].populationoverallA});
           this.setState({populationFemale2A:data.employment_data[0].populationoverallFemaleA});
           this.setState({populationCaste2A:data.employment_data[0].populationoverallCastA});
           this.setState({populationTribe2A:data.employment_data[0].populationoverallTribeA});
           this.setState({populationPwd2A:data.employment_data[0].populationoverallPwdA});

           this.setState({populationTotal2B:data.employment_data[0].populationoverallB});
           this.setState({populationFemale2B:data.employment_data[0].populationoverallFemaleB});
           this.setState({populationCaste2B:data.employment_data[0].populationoverallCastB});
           this.setState({populationTribe2B:data.employment_data[0].populationoverallTribeB});
           this.setState({populationPwd2B:data.employment_data[0].populationoverallPwdB});

           this.setState({populationTotal2C:data.employment_data[0].populationoverallC});
           this.setState({populationFemale2C:data.employment_data[0].populationoverallFemaleC});
           this.setState({populationCaste2C:data.employment_data[0].populationoverallCastC});
           this.setState({populationTribe2C:data.employment_data[0].populationoverallTribeC});
           this.setState({populationPwd2C:data.employment_data[0].populationoverallPwdC});

           this.setState({populationTotal2D:data.employment_data[0].populationoverallD});
           this.setState({populationFemale2D:data.employment_data[0].populationoverallFemaleD});
           this.setState({populationCaste2D:data.employment_data[0].populationoverallCastD});
           this.setState({populationTribe2D:data.employment_data[0].populationoverallTribeD});
           this.setState({populationPwd2D:data.employment_data[0].populationoverallPwdD});

        }else {
        alert("Somethin Went Wrong");
        }
  }


  CheckTextInput = () => {
    var total = parseInt(this.state.populationTotal2C, 10 );
    var female = parseInt(this.state.populationFemale2C, 10 );
    var sc = parseInt(this.state.populationCaste2C, 10 );
    var st = parseInt(this.state.populationTribe2C, 10 );
    var pwd = parseInt(this.state.populationPwd2C, 10 );

    if(this.state.populationTotal2C == '' || this.state.populationFemale2C == '' || this.state.populationCaste2C == '' || this.state.populationTribe2C == '' || this.state.populationPwd2C == ''){
      alert('Please Enter Fields');
    }else {
      if(total> 100){
        alert("Total Population rate cannot be more than 100");
      }else {
        if(female > 100){
          alert("Female Population rate cannot be more than 100");
        }else {
          if(sc > 100){
            alert("SC Population rate cannot be more than 100");
          }else {
            if(st > 100){
              alert("ST Population cannot be more than 100");
            }else {
              if(pwd > 100){
                alert("PWD Population cannot be more than 100");
              }else {
                this.storeData();
                this.fetchData();
              }
            }
          }
        }
      }
    }
  };

  render() {
    return (
      <ScrollView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
      <KeyboardAvoidingView behavior="padding" enabled>
          <View>
            <View style={styles.question}>
              <View style={styles.check1}>
                <View style={styles.check123}>
                <Text style={styles.text2}>2. </Text>
                <Text style={styles.text23}>  Employment Data</Text>
                </View>
                <View style={styles.check1}>
                <View style={styles.check21}>
                <Text style={styles.text21}>2 (C) </Text>
                <Text style={styles.text1}>Workforce Participation Rate (Youth, 15 to 35 years)</Text>
                </View>
                </View>
                <Text style={styles.text10}>Overall</Text>
                <TextInput placeholder="Overall" style={styles.textInput}  returnKeyType="done"
                keyboardType="numeric"
                value={this.state.populationTotal2C}
                onChangeText={(text) => this.setState({populationTotal2C: text}) } />
                <Text style={styles.text10}>Female</Text>
              <TextInput placeholder="Female" style={styles.textInput}  returnKeyType="done"
                keyboardType="numeric"
                value={this.state.populationFemale2C}
                onChangeText={(text) => this.setState({populationFemale2C: text}) }/>

                <Text style={styles.text10}>SC</Text>
                <View style={styles.na}>
                {(this.state.status==0)?
                  <TextInput placeholder="SC" style={styles.textInput1}  returnKeyType="done"
                    keyboardType="numeric"
                    value={this.state.populationCaste2C}
                    onChangeText={(text) => this.toggleStatus(0,text)}/>
                  : <TextInput placeholder="S" style={styles.textInput1}  returnKeyType="done"
                    keyboardType="text"
                    value={"NA"}
                    onChangeText={(text) => this.toggleStatus(0,"NA")}/>

                }
                  <TouchableOpacity
                        style={styles.button1}
                        onPress={() => this.toggleStatus(1,"NA")}>
                        <Text style={styles.text3}>NA</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text10}>ST</Text>
                <View style={styles.na}>
                {(this.state.status2==0)?
                  <TextInput placeholder="ST" style={styles.textInput1}  returnKeyType="done"
                    keyboardType="numeric"
                    value={this.state.populationTribe2C}
                    onChangeText={(text) => this.toggleStatus2(0,text)}/>
                  : <TextInput placeholder="S" style={styles.textInput1}  returnKeyType="done"
                    keyboardType="text"
                    value={"NA"}
                    onChangeText={(text) => this.toggleStatus2(0,"NA")}/>

                }
                  <TouchableOpacity
                        style={styles.button1}
                        onPress={() => this.toggleStatus2(1,"NA")}>
                        <Text style={styles.text3}>NA</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text10}>PWD</Text>
              <TextInput placeholder="PWD" style={styles.textInput}  returnKeyType="done"
                keyboardType="numeric"
                value={this.state.populationPwd2C}
                onChangeText={(text) => this.setState({populationPwd2C: text}) }/>


              </View>
                <Text   style={{marginTop: 30, color: "#ffffff",fontSize:18,alignSelf: "center",}}>( 3 / 4 )</Text>

                <View style= {styles.check1234}>
                <TouchableOpacity
                style={styles.back}
                onPress={() => this.props.navigation.navigate("Section2B")}
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
  text10: {
    color: "#ffffff",
    fontSize:16,
    alignSelf: "center",
    marginTop:30,
    marginLeft:40,
    width:"85%",
    marginRight:15
  },
  textInput1: {
    width: 240,
    height: 50,
    color: "#121212",
    borderRadius: 15,
    borderColor: "#ffffff",
    borderWidth: 1,
    textAlign: "center",
    marginTop: 40,
    alignSelf: "center",
    backgroundColor:"#ffffff",
    marginLeft:39,
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
  na: {
    flex:1,
    flexDirection:"row",
    marginTop:-20,
    marginBottom:-20,
  },
  button1: {
    width: 70,
    height: 45,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: "center",
    marginTop: 60,
    alignSelf:"center",
    marginBottom:20,
    marginLeft:10,
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
  na: {
    flex:1,
    flexDirection:"row",
    marginTop:-20,
    marginBottom:-20,
  },
  button1: {
    width: 70,
    height: 45,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: "center",
    marginTop: 60,
    alignSelf:"center",
    marginBottom:20,
    marginLeft:10,
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
  check1234: {
    flexDirection: "row",
    marginLeft:10,
    marginRight:10,
    marginTop:20
  },
});
