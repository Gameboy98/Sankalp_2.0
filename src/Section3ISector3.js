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

export default class Section3ISector3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      populationTotalA: '',
      populationFemaleA: '',
      populationCasteA: '',
      populationTribeA: '',
      populationPwdA: '',
      category_data: [],
      status:true,
      sector1:'',
      sector2:'',
      sector3:'',
      sector4:'',
      sector5:'',

    };
  }

  async componentDidMount() {
    let var1 =  await AsyncStorage.getItem("userId");
    let sector1 =  await AsyncStorage.getItem("SelectedSector1");
    let sector2 =  await AsyncStorage.getItem("SelectedSector2");
    let sector3 =  await AsyncStorage.getItem("SelectedSector3");
    let sector4 =  await AsyncStorage.getItem("SelectedSector4");
    let sector5 =  await AsyncStorage.getItem("SelectedSector5");
    this.setState({userId:var1});
    this.setState({sector1:sector1});
    this.setState({sector2:sector2});
    this.setState({sector3:sector3});
    this.setState({sector4:sector4});
    this.setState({sector5:sector5});
    this.fetchData();

  }

  CheckTextInput = () => {
    if (this.state.populationTotalA == '' || this.state.populationFemaleA == '' || this.state.populationCasteA == ''|| this.state.populationTribeA == ''|| this.state.populationPwdA == '') {
      alert('Please Enter Fields');
    }else {

      if(this.state.sector4=='' || this.state.sector4==null){
        this.props.navigation.navigate("Section3JSector1");
      }else {
        this.props.navigation.navigate("Section3ISector4");
      }
    }

  };


  async fetchData() {
    let url = "https://youth-apicalls.appspot.com/sankalp/get/category/data/"
    const response = await fetch(url, {
      method: 'POST',
    });
    const data = await response.json();
    this.setState({category_data:data});

  }

  render() {
    const { category_data: list }= this.state.category_data
    return (
      <ScrollView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
      <KeyboardAvoidingView behavior="padding" enabled>

      <View>
        <View style={styles.question}>
          <View style={styles.check1}>
            <View style={styles.check123}>
            <Text style={styles.text2}>3. </Text>
            <Text style={styles.text23}>  Demand and Supply</Text>
            </View>
            <View style={styles.check1}>
            <View style={styles.check21}>
            <Text style={styles.text21}>3 (I) </Text>
            <Text style={styles.text1}>Training Numbers for Previous FY (Supply)</Text>
            </View>
            </View>
            <View style={styles.check21}>
            <Text style={styles.text21}>Sector 3:   </Text>
            <Text style={styles.text1}>{this.state.sector3}</Text>
            </View>
            <Text style={styles.text10}>Total Population</Text>
            <TextInput placeholder="Total Population" style={styles.textInput}  returnKeyType="done"
            keyboardType="numeric" value={this.state.populationTotalA} onChangeText={(text) => this.setState({populationTotalA: text}) } />
           <Text style={styles.text10}>Female Population</Text>
          <TextInput placeholder="Female Population" style={styles.textInput}  returnKeyType="done"
            keyboardType="numeric" value={this.state.populationFemaleA} onChangeText={(text) => this.setState({populationFemaleA: text}) }/>
          <Text style={styles.text10}>SC Population</Text>
          <TextInput placeholder="SC Population" style={styles.textInput}  returnKeyType="done"
            keyboardType="numeric" value={this.state.populationCasteA} onChangeText={(text) => this.setState({populationCasteA: text}) }/>
          <Text style={styles.text10}>ST Population</Text>
          <TextInput placeholder="ST Population" style={styles.textInput}  returnKeyType="done"
            keyboardType="numeric" value={this.state.populationTribeA}  onChangeText={(text) => this.setState({populationTribeA: text}) }/>
          <Text style={styles.text10}>PWD Population</Text>
          <TextInput placeholder="PWD Population" style={styles.textInput}  returnKeyType="done"
            keyboardType="numeric" value={this.state.populationPwdA} onChangeText={(text) => this.setState({populationPwdA: text}) }/>
          </View>

          <View style= {styles.check1}>
            <Text   style={{marginTop: 40,marginBottom: 10, color: "#ffffff",fontSize:18,alignSelf: "center",}}>( 8 / 20 )</Text>

            <View style= {styles.check1234}>
            <TouchableOpacity
            style={styles.back}
            onPress={() => this.props.navigation.navigate("Section3ISector2")}
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
    flexDirection: "row",
    marginLeft:10,
    marginRight:10,
    alignSelf:"center",
  },
  back: {
    marginRight:5,
    marginLeft:10,
    marginTop:20,
    paddingTop:10,
    paddingBottom:10,
    width:150,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submit:{
    marginRight:10,
    marginLeft:5,
    marginTop:20,
    paddingTop:10,
    paddingBottom:10,
    width:150,
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
