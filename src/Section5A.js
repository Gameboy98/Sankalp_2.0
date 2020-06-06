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
  AppRegistry,
  LayoutAnimation,
  UIManager,
  Dimensions,
  Animated,
  Text,Platform,KeyboardAvoidingView,TouchableHighlight
} from 'react-native';

const width = Dimensions.get('window').width;

class Animated_Item extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.item.id !== this.props.item.id) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 0.5,
        duration: 510,
        useNativeDriver: true
      }
    ).start(() => {
      this.props.afterAnimationComplete();
    });
  }

  deleteItem = () => {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 510,
        useNativeDriver: true
      }
    ).start(() => {
      this.props.deleteItem(this.props.item.id);
    });
  }

  render() {

    const translate_Animation_Object = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-width, 0, width]
    });

    const opacity_Animation_Object = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });

    return (
      <Animated.View style={[
        styles.singleItemView, {
          transform: [{ translateX: translate_Animation_Object }],
          opacity: opacity_Animation_Object
        }]}>

        <View style={styles.check21}>
          <Text style={styles.text1}>Designation</Text>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={this.deleteItem}>
            <Text style={styles.removeIcon}>{'\u00D7'}</Text>
          </TouchableOpacity>
        </View>
        <TextInput placeholder="Designation" style={styles.textInput}  returnKeyType="done"
          keyboardType="text" onChangeText={(text) => this.setState({resourcePosition: text}) } />
        <Text style={styles.text14}>Total Positions</Text>
        <TextInput placeholder="Units" style={styles.textInput}  returnKeyType="done"
          keyboardType="numeric" onChangeText={(text) => this.setState({units: text}) }/>
        <Text style={styles.text14}>Proposed Salary(INR) per annum</Text>
        <TextInput placeholder="Proposed Salary(INR) per annum" style={styles.textInput}  returnKeyType="done"
          keyboardType="numeric" onChangeText={(text) => this.setState({costAnnum: text}) }/>
        <Text style={styles.text1}>    Total Cost (INR) – Annual </Text>
        <View style={styles.textBorder}>
        <Text style={[styles.submitText1]}></Text>
        </View>
      </Animated.View>
    );
  }
}

export default class Section5A extends Component {
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

      valueArray: [],
      disabled: false,

    };

    this.addNewElement = false;
    this.index = 0;
  }

  async componentDidMount() {
    let var1 =  await AsyncStorage.getItem("userId");
    this.setState({userId:var1});
    this.fetchSavedData();

  }

  CheckTextInput = () => {
    if (this.state.resourcePosition == '' || this.state.costAnnum == -1 || this.state.units == -1) {
      alert('Please Enter Fields');
    }else {
      var f1 = this.state.costAnnum;
        var f2 = this.state.units ;
            const result1 = f1 && f2 ?  f2 * f1 : null;
      if(result1 < 120000 ){
        alert('This is per annum cost, So it can not be less than 120000');
      }else{
        this.setState({costAnnual:result1});
        this.fetchData();
        // this.props.navigation.navigate("Section5C1");
      }
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
    let url = "https://youth-apicalls.appspot.com/sankalp/add/demographic/section/five/";
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
      dataAnalysisUnit:"",
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

  afterAnimationComplete = () => {
    this.index += 1;
    this.setState({ disabled: false });
  }

  add_New_View = () => {
    this.addNewElement = true;
    const newlyAddedValue = { id: "id_" + this.index, text: this.index + 1 };

    this.setState({
      disabled: true,
      valueArray: [...this.state.valueArray, newlyAddedValue]
    });
  }

  remove_Selected_Item(id) {
    this.addNewElement = false;
    const newArray = [...this.state.valueArray];
    newArray.splice(newArray.findIndex(ele => ele.id === id), 1);

    this.setState(() => {
      return {
        valueArray: newArray
      }
    }, () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    });
  }

  render() {
    var f1 = this.state.costAnnum;
      var f2 = this.state.units ;
          const result = f1 && f2 ?  f2 * f1 : null;
    return (
      <ScrollView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null }>
      <KeyboardAvoidingView behavior="padding" enabled>
          <View>
            <View style={styles.question}>
              <View style={styles.check1}>
                <View style={styles.check123}>
                <Text style={styles.text2}>5.  </Text>
                <Text style={styles.text23}>Institutional Strengthening</Text>
                </View>
                <View style={styles.check1}>
                <View style={styles.check21}>
                <Text style={styles.text21}>5 (A):   </Text>
                <Text style={styles.text19}>Hiring of resources</Text>
                </View>
                <Text style={styles.text14}>Designation</Text>
                <TextInput placeholder="Designation" style={styles.textInput}  returnKeyType="done"
                  keyboardType="text" onChangeText={(text) => this.setState({resourcePosition: text}) } />
                <Text style={styles.text14}>Total Positions</Text>
                <TextInput placeholder="Units" style={styles.textInput}  returnKeyType="done"
                  keyboardType="numeric" onChangeText={(text) => this.setState({units: text}) }/>
                <Text style={styles.text14}>Proposed Salary(INR) per annum</Text>
                <TextInput placeholder="Proposed Salary(INR) per annum" style={styles.textInput}  returnKeyType="done"
                  keyboardType="numeric" onChangeText={(text) => this.setState({costAnnum: text}) }/>
                <Text style={styles.text1}>    Total Cost (INR) – Annual </Text>
                <View style={styles.textBorder}>
                <Text style={[styles.submitText1]}>{result}</Text>
                </View>
                 <View style={{ flex: 1, padding: 4 }}>
                  {this.state.valueArray.map(ele => {
                    return (
                      <Animated_Item
                        key={ele.id}
                        item={ele}
                        deleteItem={(id) => this.remove_Selected_Item(id)}
                        afterAnimationComplete={this.afterAnimationComplete}
                      />
                    )
                  })}
                </View>
                <TouchableHighlight
                  style={styles.submit}
                  disabled={this.state.disabled}
                  onPress={this.add_New_View}>
                  <Text style={[styles.submitText]}>Add More</Text>
                  </TouchableHighlight>
                <Text   style={{marginTop: 30, color: "#ffffff",fontSize:18,alignSelf: "center",}}>( 1 / 11 )</Text>
                <View style={styles.check1234}>
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
    marginLeft:10,
    marginRight:10,
    marginTop:20
  },
  singleItemView:{
    marginTop:30,
  },
  removeIcon:{
    alignSelf:"center",
    fontSize:16
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
  viewHolder: {
    marginTop:50,
  },
  deleteButton:{
    width:20,
    backgroundColor:"#ffffff",
    height:20,
    borderRadius:10,
  },
  back: {
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
    marginLeft:20,
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
    marginBottom: 20,
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
    marginTop:-10,
    marginLeft:5,
    width:"85%",
    marginRight:15
  },
  text14: {
    color: "#ffffff",
    fontSize:16,
    alignSelf: "center",
    marginLeft:25,
    marginBottom:10,
    width:"85%",
    marginRight:15
  },
  text19: {
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
    marginBottom:20,
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
  submitText1:{
      color:'#000000',
      textAlign:'center',
      fontSize:18,
  }
});
