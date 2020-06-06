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
import ModalDropdown from 'react-native-modal-dropdown';
import Autocomplete from 'react-native-autocomplete-input';

var radio_props = [
      {label: 'Yes', value: 1 },
      {label: 'No', value: 0 }
];

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


export default class Section3E extends Component {
  constructor(props) {
    super(props);
    this.state = {
        opt3a: 2,
        opt3a1: 2,
        opt3a2: '',
        opt3a3: '',
        status:true,

        sector1:'',
        sectorList1: [],
        query1: '',

    };
  }

  async componentDidMount() {
    let var1 =  await AsyncStorage.getItem("userId");
    this.setState({userId:var1});

    const { results: sectorList1 } = data;
    this.setState({ sectorList1 });


  }


  toggleStatus(value){
    this.setState({
      opt3a:value

    });

  }

  toggleStatus1(value){
    this.setState({
      opt3a:value

    });

  }



  CheckTextInput = () => {
     {
      this.props.navigation.navigate("Section3I");
    }

  };

  findFilm1(query) {
    //method called everytime when we change the value of the input
    if (query === '') {
      //if the query is null then return blank
      return [];
    }

    const { sectorList1 } = this.state;
    //making a case insensitive regular expression to get similar value from the film json
    const regex = new RegExp(`${query.trim()}`, 'i');
    //return the filtered film array according the query from the input
    return sectorList1.filter(film => film.title.search(regex) >= 0);
  }


  render() {
    const { query1 } = this.state;
    const sectorList1 = this.findFilm1(query1);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
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
                <Text style={styles.text21}>3 (E). </Text>
                <Text style={styles.text1}>Does the district office have access to training and placement data for all short-term skill development schemes being implemented in the district?</Text>
                </View>
                </View>

                <View style={styles.check1}>
                <View style={styles.check}>
                <RadioForm labelColor={'#ffffff'} labelStyle={{fontSize: 20, color: '#ffffff', marginLeft:20, marginRight:80}} selectedButtonColor={'#ffffff'} radio_props={radio_props} buttonColor={'#ffffff'} formHorizontal={true} initial={2} onPress={(value) => this.toggleStatus(value)}/>
                </View>
                </View>
              </View>


              {(this.state.opt3a==0)?
                <View style={styles.check1}>
                <View style={styles.check21}>
                <Text style={styles.text21}>3 (F) </Text>
                <Text style={styles.text1}>If not, then kindly specify the national and state schemes for which data is not available:</Text>
                </View>
                <Autocomplete
                  autoCapitalize="none"
                  autoCorrect={false}
                  containerStyle={styles.autocompleteContainer}
                  //data to show in suggestion
                  data={sectorList1.length === 1 && comp(query1, sectorList1[0].title) ? [] : sectorList1}
                  //default value if you want to set something in input
                  defaultValue={query1}
                  /*onchange of the text changing the state of the query which will trigger
                  the findFilm method to show the suggestions*/
                  onChangeText={text => this.setState({ query1: text })}
                  placeholder="Enter sector name"
                  renderItem={({ item }) => (
                    //you can change the view you want to show in suggestion from here
                    <TouchableOpacity onPress={() => this.setState({ query1: item.title })}>
                      <Text style={styles.itemText}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
                </View> : null}


              <View style= {styles.check1}>
                <Text   style={{marginTop: 140,marginBottom: 10, color: "#ffffff",fontSize:18,alignSelf: "center",}}>( 5 / 20 )</Text>

                <View style= {styles.check1234}>
                <TouchableOpacity
                style={styles.back}
                onPress={() => this.props.navigation.navigate("Section3D")}
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
    marginBottom:10
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
    marginRight:10,
  },
  check:{
    marginTop:20,
    marginLeft:75,
    width:20,
    height:20,
  },
  dropLayout:{
    marginTop:15,
    marginBottom:15,
    width:"85%",
    height:20,
    alignSelf:"center",
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
    fontSize:22,

  },
  text21: {
    color: "#a9a9a9",
    fontSize:16,
    marginTop:20,
    marginLeft:15,

  },
  text23: {
    color: "#ffffff",
    fontSize:20,
    width:"90%",
    marginRight:5,
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
  autocompleteContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
    marginTop:20,
    marginBottom:20,
    alignSelf: "center",
    textAlign: "center",
    width:"80%"
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

const data = { "results": [
  {
      "title": "Aerospace and aviation"
  },
  {
      "title": "Agriculture"
  },
  {
      "title": "Apparel and Home Furnishing"
  },
  {
      "title": "Automobile"
  },
  {
      "title": "Beauty and Wellness"
  },
  {
      "title": "Banking, Financial Services and Insurance"
  },
  {
      "title":  "Capital Goods"
  },
  {
      "title":  "Construction"
  },
  {
      "title": "Domestic Work"

  },
  {
      "title": "Electronics"
  },
  {
      "title": "Food "
  },
  {
      "title": "Furniture and Fittings"
  },
  {
      "title": "Gems and Jewelry"
  },
  {
      "title": "Handicrafts and Carpet"
  },
  {
      "title": "Healthcare"
  },
  {
      "title": "Hydrocarbon"
  },
  {
      "title": "Iron and Steel"
  },
  {
      "title": "Plumbing"
  },
  {
      "title": "Infrastructure Equipment"
  },
  {
      "title": "Instrumentation Automation Surveillance & Communication"
  },
  {
      "title": "IT and ITeS"
  },
  {
      "title": "Leather"
  },
  {
      "title": "Life Sciences"
  },
  {
      "title": "Logistics"
  },
  {
      "title": "Media and Entertainment"
  },
  {
      "title": "Paints and Coating"
  },
  {
      "title": "Power"
  },
  {
      "title": "Retail"
  },
  {
      "title": "Rubber"
  },
  {
      "title": "Green Jobs"
  },
  {
      "title": "Mining"
  },
  {
      "title": "Telecom"
  },
  {
      "title": "Sports, Physical Education, Fitness and Leisure"
  },
  {
      "title": "Strategic Manufacturing"
  },
  {
      "title": "Tourism and Hospitality"
  },
  {
      "title": "Management and Entrepreneurship"
  }
      ]
    }
