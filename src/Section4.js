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
import ModalDropdown from 'react-native-modal-dropdown';

export default class Section4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        totalTrainee: '',
        totalTrainer: '',
        sectorNameB: 'Select Sector',
        averageWeeks:'',
        sectorNameD: 'Select Sector',
        sector1:'',
        sector2:'',
        sector3:'',
        sector4:'',
        sector5:'',
        status:true,

    };
  }


  async componentDidMount() {
    let var1 =  await AsyncStorage.getItem("userId");
    let sector1 = await AsyncStorage.getItem("SelectedSector1");
    let sector2 = await AsyncStorage.getItem("SelectedSector2");
    let sector3 = await AsyncStorage.getItem("SelectedSector3");
    let sector4 = await AsyncStorage.getItem("SelectedSector4");
    let sector5 = await AsyncStorage.getItem("SelectedSector5");
    this.setState({userId:var1});
    this.setState({sector1:sector1});
    this.setState({sector2:sector2});
    this.setState({sector3:sector3});
    this.setState({sector4:sector4});
    this.setState({sector5:sector5});
    this.fetchSavedData();

  }

  CheckTextInput = () => {
    if (this.state.totalTrainee == '' || this.state.totalTrainer == '' || this.state.averageWeeks == '') {
      alert('Please Enter Fields');
    }else {
      if(this.state.totalTrainer > this.state.totalTrainee){
        alert('Total Trainer can not be greater than Total Trianee');
      }else if(this.state.averageWeeks<0 || this.state.averageWeeks>52){
        alert('Average Weeks can be between 0-52 only');
      }else{
        this.fetchData();
      }
    }

  };


  async fetchSavedData() {
    let url = "https://youth-apicalls.appspot.com/sankalp/get/demographic/section/four/";
      const response = await fetch(url, {
               method: 'POST',
               body: JSON.stringify({
      userId:this.state.userId,
    }),  });

      const data = await response.json();
       if(data.success == 1){
           this.setState({totalTrainee:data.demographic_data[0].totalTrainee});
           this.setState({totalTrainer:data.demographic_data[0].totalTrainers});
           this.setState({sectorNameB:data.demographic_data[0].sectorSkill});
           this.setState({averageWeeks:data.demographic_data[0].weeksPost});
           this.setState({sectorNameD:data.demographic_data[0].primarySector});

        }else {
        alert("Somethin Went Wrong");
        }
  }

  async fetchData() {
    let url = "https://youth-apicalls.appspot.com/sankalp/add/demographic/section/four/";
      const response = await fetch(url, {
               method: 'POST',
               body: JSON.stringify({
      userId:this.state.userId,

      totalTrainee: this.state.totalTrainee,
      totalTrainers: this.state.totalTrainer,
      sectorSkill: this.state.sectorNameB,
      weeksPost: this.state.averageWeeks,
      primarySector: this.state.sectorNameD,

    }),  });

      const data = await response.json();
      console.log("SomeLog",data);
       if(data.response.confirmation == 1){
           this.props.navigation.navigate("Question");
        }else {
        alert("Somethin Went Wrong");
        }
  }

  handleInputChange = (totalTrainee) => {
      if (/^\d+$/.test(totalTrainee) || totalTrainee === '') {
        this.setState({totalTrainee});
      }
    }

    handleInputChange1 = (totalTrainer) => {
        if (/^\d+$/.test(totalTrainer) || totalTrainer === '') {
          this.setState({totalTrainer});
        }
      }
      handleInputChange3 = (averageWeeks) => {
          if (/^\d+$/.test(averageWeeks) || averageWeeks === '') {
            this.setState({averageWeeks});
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
                <Text style={styles.text2}>4  </Text>
                <Text style={styles.text23}> Skills Training Delivery</Text>
                </View>
                <View style={styles.check1}>
                <View style={styles.check21}>
                <Text style={styles.text21}>4 (A) </Text>
                <Text style={styles.text1}>Information on Trainees and Trainers in the district</Text>
                </View>
                <TextInput placeholder="Total Trainees in the District" style={styles.textInput}  returnKeyType="done"
                  keyboardType="numeric"
                  onChangeText={this.handleInputChange}
                  value={this.state.totalTrainee} />
                <TextInput placeholder="Total Trainers in the District" style={styles.textInput}  returnKeyType="done"
                  keyboardType="numeric"
                  onChangeText={this.handleInputChange1}
                  value={this.state.totalTrainer}/>

                <View style={styles.check21}>
                <Text style={styles.text21}>4 (B) </Text>
                <Text style={styles.text1}>In which Sector Skill Councils represented Primary Sectors of Employment is there a shortage of trainers</Text>
                </View>

                <View style={styles.dropLayout}>
                <ModalDropdown
                style={styles.drop}
                dropdownStyle={styles.drop1}
                defaultValue = {this.state.sectorNameB}
                onSelect={(index,value)=>{this.setState({sectorNameB:value})}}
                options={[this.state.sector1, this.state.sector2,this.state.sector3,this.state.sector4,this.state.sector5]}/>
                </View>

                <View style={styles.check21}>
                <Text style={styles.text21}>4 (C) </Text>
                <Text style={styles.text1}>Average number of weeks post which a person is assessed after completion of short-term skills training course</Text>
                </View>
                <TextInput placeholder="In weeks(0 to 52 weeks)" style={styles.textInput}  returnKeyType="done"
                  keyboardType="numeric" onChangeText={this.handleInputChange3}
                  value={this.state.averageWeeks}/>

                  <View style={styles.check21}>
                  <Text style={styles.text21}>4 (D) </Text>
                  <Text style={styles.text1}>In which Sector Skill Councils represented Primary Sectors of Employment is there a delay in assessment of trainees</Text>
                  </View>

                  <View style={styles.dropLayout}>
                  <ModalDropdown
                  style={styles.drop}
                  dropdownStyle={styles.drop1}
                  defaultValue = {this.state.sectorNameD}
                  onSelect={(index,value)=>{this.setState({sectorNameD:value})}}
                  options={[this.state.sector1, this.state.sector2,this.state.sector3,this.state.sector4,this.state.sector5]}/>
                  </View>

               <Text   style={{marginTop: 30, color: "#ffffff",fontSize:18,alignSelf: "center",}}>( 1 / 1 )</Text>

               <View style={styles.check1234}>
                 <TouchableHighlight
                 style={styles.submit}
                 onPress={this.CheckTextInput}
                 underlayColor='#fff'>
                 <Text style={[styles.submitText]}>Submit</Text>
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
    marginBottom:10,
    justifyContent:"center",
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
  dropLayout:{
    marginTop:10,
    marginBottom:10,
    alignSelf: "center",
    width:320,
    height:50,
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
    width:320,
    borderRadius:15,
    textAlign:"center",
    fontSize:30,
    marginLeft:0,
    justifyContent: "center",
    padding:10,
  },
  drop1:{
    width:320,
  },
  ques:{
    width:"90%",
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
