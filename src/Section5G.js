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
  Text,Platform,KeyboardAvoidingView,TouchableHighlight
} from 'react-native';

export default class Section5G extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcePosition: '',
      costAnnum:'',
      units: '',
      costAnnual:'',

      dataUnits:'',
      datacostAnnual:'',
      dataTotal:'',

      reportingCost:'',
      reportingUnit:'',
      reportingAnnual:'',

      hardwareCost:'',
      hardwareUnits:'',
      hardwareAnnual:'',


      marketCost:'',
      marketUnit:'',
      marketTotal:'',

      assessorsCost:'',
      assessorsUnit:'',
      assessorsTotal:'',

      engagementCost:'',

      pilotsCost:'',
      pilotsUnits:'',
      pilotTotal:'',

      entrepreneurshipCost:'',
      entrepreneurshipUnit:'',

      councilCost:'',

      groupbeneficiariesWoman:'',
      groupbeneficiariesYouth:'',
      groupbeneficiariesWomanCost:'',

      scbeneficiariesTotal:'',
      scbeneficiariesYouth:'',
      scbeneficiariesCost:'',

      stbeneficiariesTotal:'',
      stbeneficiariesYouth:'',
      stCost:'',



      districtGap:'',
      monitorTotal:'',
      skillTotal:'',
      status:true,
    };
  }

  async componentDidMount() {
    let var1 =  await AsyncStorage.getItem("userId");
    this.setState({userId:var1});
    this.fetchData();

  }

  CheckTextInput = () => {
    if (this.state.unitCost5A == -1 || this.state.unit == -1) {
      alert('Please Enter Fields');
    }else {

        this.props.navigation.navigate("Section5I1");

    }

  };


  async fetchSavedData() {
    let url = "https://youth-apicalls.appspot.com/sankalp/get/demographic/data/section/five/";
      const response = await fetch(url, {
               method: 'POST',
               body: JSON.stringify({
      userId:this.state.userId,
    }),  });

      const data = await response.json();
       if(data.success == 1){
           this.setState({resourcePosition:data.demographic_data[0].resourcePosition});
           this.setState({costAnnum:data.demographic_data[0].costAnnum});
           this.setState({units:data.demographic_data[0].units});
           this.setState({costAnnual:data.demographic_data[0].costAnnual});

           this.setState({dataAnalysisCost:data.demographic_data[0].dataAnalysisCost});
           this.setState({datacostAnnual:data.demographic_data[0].datacostAnnual});

           this.setState({reportingCost:data.demographic_data[0].reportingCost});
           this.setState({reportingUnit:data.demographic_data[0].reportingUnit});
           this.setState({reportingAnnual:data.demographic_data[0].reportingAnnual});

           this.setState({hardwareCost:data.demographic_data[0].hardwareCost});

           this.setState({districtGap:data.demographic_data[0].districtGap});

           this.setState({monitorTotal:data.demographic_data[0].monitorTotal});

           this.setState({marketCost:data.demographic_data[0].marketCost});
           this.setState({marketUnit:data.demographic_data[0].marketUnit});
           this.setState({marketTotal:data.demographic_data[0].marketTotal});

           this.setState({assessorsCost:data.demographic_data[0].assessorsCost});
           this.setState({assessorsUnit:data.demographic_data[0].assessorsUnit});
           this.setState({assessorsTotal:data.demographic_data[0].assessorsTotal});

          this.setState({pilotsCost:data.demographic_data[0].pilotsCost});
          this.setState({pilotsUnits:data.demographic_data[0].pilotsUnits});
          this.setState({pilotTotal:data.demographic_data[0].pilotTotal});


          this.setState({entrepreneurshipCost:data.demographic_data[0].entrepreneurshipCost});
          this.setState({entrepreneurshipUnit:data.demographic_data[0].entrepreneurshipUnit});
          this.setState({councilCost:data.demographic_data[0].councilCost});

          this.setState({beneficiariesWoman:data.demographic_data[0].beneficiariesWoman});
          this.setState({beneficiariesYouth:data.demographic_data[0].beneficiariesYouth});
          this.setState({skillTotal:data.demographic_data[0].skillTotal});

          this.setState({groupbeneficiariesWoman:data.demographic_data[0].groupbeneficiariesWoman});
          this.setState({groupbeneficiariesYouth:data.demographic_data[0].groupbeneficiariesYouth});

          this.setState({stbeneficiariesTotal:data.demographic_data[0].stbeneficiariesTotal});
          this.setState({stbeneficiariesYouth:data.demographic_data[0].stbeneficiariesYouth});
          this.setState({stCost:data.demographic_data[0].stCost});

          this.setState({reportingCost:data.demographic_data[0].reportingCost});
          this.setState({reportingUnit:data.demographic_data[0].reportingUnit});

          this.setState({reportingAnnual:data.demographic_data[0].reportingAnnual});
          this.setState({hardwareCost:data.demographic_data[0].hardwareCost});
          this.setState({reportingUnit:data.demographic_data[0].reportingUnit});


        }else {
        alert("Somethin Went Wrong");
        }
  }

  async fetchData() {
    let url = "https://youth-apicalls.appspot.com/sankalp/add/demographic/data/section/five/";
      const response = await fetch(url, {
               method: 'POST',
               body: JSON.stringify({
      userId:this.state.userId,

      resourcePosition: this.state.resourcePosition,
      costAnnum: this.state.costAnnum,
      units: this.state.units,
      costAnnual: this.state.costAnnual,

      datacostAnnual:this.state.datacostAnnual,
      dataUnits:this.state.dataUnits,
      dataTotal:this.state.dataTotal,

      reportingAnnual:this.state.reportingAnnual,
      reportingUnit:this.state.reportingUnit,
      reportingCost:this.state.reportingCost,


      hardwareAnnual:this.state.hardwareAnnual,
      hardwareUnits:this.state.hardwareUnits,
      hardwareCost:this.state.hardwareCost,

      marketCost:this.state.marketCost,
      marketUnit:this.state.marketUnit,
      marketTotal:this.state.marketTotal,

      assessorsCost:this.state.assessorsCost,
      assessorsUnit:this.state.assessorsUnit,
      assessorsTotal:this.state.assessorsTotal,

      engagementCost:this.state.engagementCost,

      pilotsCost:this.state.pilotsCost,
      pilotsUnits:this.state.pilotsUnits,
      pilotTotal:this.state.pilotTotal,

      entrepreneurshipCost:this.state.entrepreneurshipCost,
      entrepreneurshipUnit:this.state.entrepreneurshipUnit,

      councilCost:this.state.councilCost,

      groupbeneficiariesWoman:this.state.groupbeneficiariesWoman,
      groupbeneficiariesYouth:this.state.groupbeneficiariesYouth,
      groupbeneficiariesWomanCost:this.state.groupbeneficiariesWomanCost,


      scbeneficiariesTotal:this.state.stbeneficiariesTotal,
      scbeneficiariesYouth:this.state.stbeneficiariesYouth,
      scbeneficiariesCost:this.state.scbeneficiariesCost,


      stbeneficiariesTotal:this.state.stbeneficiariesTotal,
      stbeneficiariesYouth:this.state.stbeneficiariesYouth,
      stCost:this.state.stCost,


      dataAnalysisCost: "",
      districtGap:"",
      monitorTotal:"",

      beneficiariesWoman:"",
      beneficiariesYouth:"",
      skillTotal:"",


    }),  });

      const data = await response.json();
      console.log("SomeLog",data);
       if(data.response.confirmation == 1){
           this.props.navigation.navigate("Section5C1");
        }else {
        alert("Somethin Went Wrong");
        }
  }

  render() {
    var f1 = this.state.unitCost5A;
      var f2 = this.state.unit ;
          const result = f1 && f2 ?  f2 * f1 : null;
    return (
      <ScrollView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
      <KeyboardAvoidingView behavior="padding" enabled>
          <View>
            <View style={styles.question}>
              <View style={styles.check1}>
                <View style={styles.check123}>
                <Text style={styles.text2}>5   </Text>
                <Text style={styles.text23}>Quality and Market Relevance</Text>
                </View>
                <View style={styles.check1}>
                <View style={styles.check21}>
                <Text style={styles.text21}>5 (G):   </Text>
                <Text style={styles.text1}>Enhancing quality and availability of assessors through training of assessors</Text>
                </View>

                <TextInput placeholder="Unit Cost (INR) per annum" style={styles.textInput}  returnKeyType="done"
                  keyboardType="numeric" onChangeText={(text) => this.setState({unitCost5A: text}) }/>

                <TextInput placeholder="Units" style={styles.textInput}  returnKeyType="done"
                  keyboardType="numeric" onChangeText={(text) => this.setState({unit: text}) }/>
                <Text style={styles.text1}>    Total Cost (INR) – Annual </Text>
                <View style={styles.textBorder}>
                <Text style={[styles.submitText1]}>{result}</Text>
                </View>
                <Text   style={{marginTop: 30, color: "#ffffff",fontSize:18,alignSelf: "center",}}>( 6 / 11 )</Text>

                <View style= {styles.check1234}>
                <TouchableHighlight
                style={styles.back}
                onPress={() => this.props.navigation.navigate("Section5F")}
                underlayColor='#fff'>
                <Text style={[styles.submitText]}>Back</Text>
                </TouchableHighlight>
                  <TouchableHighlight
                  style={styles.submit}
                  onPress={this.CheckTextInput}
                  underlayColor='#fff'>
                  <Text style={[styles.submitText]}>Submit & Next</Text>
                  </TouchableHighlight>
                  </View>
                </View>
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
    marginBottom:10
  },
  check2:{
    flexDirection:"row",
    marginTop:-10,
  },
  check21:{
    flexDirection:"row",
    margin:25,
  },
  check123: {
    flexDirection: "row",
    marginLeft:5,
  },
  check1234: {
    flexDirection: "row",
    marginLeft:10,
    marginRight:10,
    marginTop:20
  },
  dropLayout:{
    marginTop:15,
    marginBottom:15,
    marginLeft:60,
    width:"85%",
    height:20,
  },
  ques:{
    width:"90%",
    padding:5,
    marginRight:5,
  },
  drop: {
    backgroundColor:"#ffffff",
    alignSelf:"center",
    height:50,
    width:'90%',
    borderRadius:8,
    textAlign:"center",
    fontSize:30,
    marginLeft:0,
    justifyContent: "center",
    padding:5,
  },
  drop1:{
    width:"70%",
  },
  ques:{
    width:"90%",
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: "#09BA6C",
    borderRadius: 15,
    borderColor: "#09BA6C",
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 10,
    alignSelf:"center",
    marginBottom:20,
    marginRight:10,
    marginLeft:5
  },
  but: {
    flexDirection:"row",
    marginLeft:20,
    marginRight:5,
    marginTop:10
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
  textInput: {
    width: 320,
    height: 50,
    color: "#121212",
    borderRadius: 15,
    borderColor: "#ffffff",
    borderWidth: 1,
    textAlign: "center",
    marginBottom: 30,
    alignSelf: "center",
    backgroundColor:"#ffffff",
  },
  textBorder: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#fff',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  text1: {
    color: "#ffffff",
    fontSize:16,
    alignSelf: "center",
    marginTop:20,
    marginLeft:5,
    width:"80%",
    marginRight:15
  },
  text2: {
    color: "#a9a9a9",
    fontSize:22,

  },
  text21: {
    color: "#a9a9a9",
    fontSize:16,
    marginTop:20,
    marginLeft:20,

  },
  text23: {
    color: "#ffffff",
    fontSize:20,
    width:"95%",
  },
  text3: {
    color: "#ffffff",
    fontSize:18,
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
  submitText1:{
      color:'#000000',
      textAlign:'center',
      fontSize:18,
  }
});
