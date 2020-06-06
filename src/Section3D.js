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

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Autocomplete from 'react-native-autocomplete-input';


export default class Section3D extends Component {
  constructor(props) {
    super(props);
    this.state = {
        opt3d: '',
        opt3e: '',
        opt3f: '',
        category_data: [],
        status:true,
        sector1:'',
        sector2:'',
        sector3:'',
        sector4:'',
        sector5:'',
        status:true,

        films: [],
        sectorList1: [],
        sectorList2: [],
        sectorList3: [],
        sectorList4: [],
        sectorList5: [],
        query: '',
        query1: '',
        query2: '',
        query3: '',
        query4: '',
        query5: '',

    };
  }

  async componentDidMount() {
    let var1 =  await AsyncStorage.getItem("userId");
    this.setState({userId:var1});
    this.fetchData();


    const { results: sectorList1 } = data;
    this.setState({ sectorList1 });

    const { results: sectorList2 } = data;
    this.setState({ sectorList2 });

    const { results: sectorList3 } = data;
    this.setState({ sectorList3 });

    const { results: sectorList4 } = data;
    this.setState({ sectorList4 });

    const { results: sectorList5 } = data;
    this.setState({ sectorList5 });

  }



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

  findFilm2(query) {
    //method called everytime when we change the value of the input
    if (query === '') {
      //if the query is null then return blank
      return [];
    }

    const { sectorList2 } = this.state;
    //making a case insensitive regular expression to get similar value from the film json
    const regex = new RegExp(`${query.trim()}`, 'i');
    //return the filtered film array according the query from the input
    return sectorList2.filter(film => film.title.search(regex) >= 0);
  }

  findFilm3(query) {
    //method called everytime when we change the value of the input
    if (query === '') {
      //if the query is null then return blank
      return [];
    }

    const { sectorList3 } = this.state;
    //making a case insensitive regular expression to get similar value from the film json
    const regex = new RegExp(`${query.trim()}`, 'i');
    //return the filtered film array according the query from the input
    return sectorList3.filter(film => film.title.search(regex) >= 0);
  }

  findFilm4(query) {
    //method called everytime when we change the value of the input
    if (query === '') {
      //if the query is null then return blank
      return [];
    }

    const { sectorList4 } = this.state;
    //making a case insensitive regular expression to get similar value from the film json
    const regex = new RegExp(`${query.trim()}`, 'i');
    //return the filtered film array according the query from the input
    return sectorList4.filter(film => film.title.search(regex) >= 0);
  }

  findFilm5(query) {
    //method called everytime when we change the value of the input
    if (query === '') {
      //if the query is null then return blank
      return [];
    }

    const { sectorList5 } = this.state;
    //making a case insensitive regular expression to get similar value from the film json
    const regex = new RegExp(`${query.trim()}`, 'i');
    //return the filtered film array according the query from the input
    return sectorList5.filter(film => film.title.search(regex) >= 0);
  }

  async storeData() {
    try {
        await AsyncStorage.setItem("SelectedSectorC1",this.state.query1);
        await AsyncStorage.setItem("SelectedSectorC2",this.state.query2);
        await AsyncStorage.setItem("SelectedSectorC3",this.state.query3);
        await AsyncStorage.setItem("SelectedSectorC4",this.state.query4);
        await AsyncStorage.setItem("SelectedSectorC5",this.state.query5);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }



  CheckTextInput = () => {
    if (this.state.query1 == '') {
      alert('Please Enter Fields');
    }else {
      this.storeData();
      this.props.navigation.navigate("Section3E");
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

    const { query1 } = this.state;
    const sectorList1 = this.findFilm1(query1);

    const { query2 } = this.state;
    const sectorList2 = this.findFilm2(query2);

    const { query3 } = this.state;
    const sectorList3 = this.findFilm3(query3);

    const { query4 } = this.state;
    const sectorList4 = this.findFilm4(query4);

    const { query5 } = this.state;
    const sectorList5 = this.findFilm5(query5);

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
                <Text style={styles.text21}>3 (D). </Text>
                <Text style={styles.text1}>Sector Skill Councils Representing Primary Sectors of Employment which account for bulk of <Text style={styles.BoldText}>migration to other states</Text></Text>
                </View>
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

                {(this.state.query1!='' && this.state.query1.length>5)?
                  <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    //data to show in suggestion
                    data={sectorList2.length === 1 && comp(query2, sectorList2[0].title) ? [] : sectorList2}
                    //default value if you want to set something in input
                    defaultValue={query2}
                    /*onchange of the text changing the state of the query which will trigger
                    the findFilm method to show the suggestions*/
                    onChangeText={text => this.setState({ query2: text })}
                    placeholder="Enter sector name"
                    renderItem={({ item }) => (
                      //you can change the view you want to show in suggestion from here
                      <TouchableOpacity onPress={() => this.setState({ query2: item.title })}>
                        <Text style={styles.itemText}>
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                  :
                  null}

                  {(this.state.query2!='' && this.state.query2.length>5)?
                    <Autocomplete
                      autoCapitalize="none"
                      autoCorrect={false}
                      containerStyle={styles.autocompleteContainer}
                      //data to show in suggestion
                      data={sectorList3.length === 1 && comp(query3, sectorList3[0].title) ? [] : sectorList3}
                      //default value if you want to set something in input
                      defaultValue={query3}
                      /*onchange of the text changing the state of the query which will trigger
                      the findFilm method to show the suggestions*/
                      onChangeText={text => this.setState({ query3: text })}
                      placeholder="Enter sector name"
                      renderItem={({ item }) => (
                        //you can change the view you want to show in suggestion from here
                        <TouchableOpacity onPress={() => this.setState({ query3: item.title })}>
                          <Text style={styles.itemText}>
                            {item.title}
                          </Text>
                        </TouchableOpacity>
                      )}
                    />
                    :
                    null}

                    {(this.state.query3!='' && this.state.query3.length>5)?
                      <Autocomplete
                        autoCapitalize="none"
                        autoCorrect={false}
                        containerStyle={styles.autocompleteContainer}
                        //data to show in suggestion
                        data={sectorList4.length === 1 && comp(query4, sectorList4[0].title) ? [] : sectorList4}
                        //default value if you want to set something in input
                        defaultValue={query4}
                        /*onchange of the text changing the state of the query which will trigger
                        the findFilm method to show the suggestions*/
                        onChangeText={text => this.setState({ query4: text })}
                        placeholder="Enter sector name"
                        renderItem={({ item }) => (
                          //you can change the view you want to show in suggestion from here
                          <TouchableOpacity onPress={() => this.setState({ query4: item.title })}>
                            <Text style={styles.itemText}>
                              {item.title}
                            </Text>
                          </TouchableOpacity>
                        )}
                      />
                      :
                      null}

                      {(this.state.query4!='' && this.state.query4.length>5)?
                        <Autocomplete
                          autoCapitalize="none"
                          autoCorrect={false}
                          containerStyle={styles.autocompleteContainer}
                          //data to show in suggestion
                          data={sectorList5.length === 1 && comp(query5, sectorList5[0].title) ? [] : sectorList5}
                          //default value if you want to set something in input
                          defaultValue={query5}
                          /*onchange of the text changing the state of the query which will trigger
                          the findFilm method to show the suggestions*/
                          onChangeText={text => this.setState({ query5: text })}
                          placeholder="Enter sector name"
                          renderItem={({ item }) => (
                            //you can change the view you want to show in suggestion from here
                            <TouchableOpacity onPress={() => this.setState({ query5: item.title })}>
                              <Text style={styles.itemText}>
                                {item.title}
                              </Text>
                            </TouchableOpacity>
                          )}
                        />
                        :
                        null}
              </View>
              <View style= {styles.check1}>
                <Text   style={{marginTop: 140,marginBottom: 10, color: "#ffffff",fontSize:18,alignSelf: "center",}}>( 4 / 20 )</Text>

                <View style= {styles.check1234}>
                <TouchableOpacity
                style={styles.back}
                onPress={() => this.props.navigation.navigate("Section3C")}
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
  check1234: {
    flexDirection: "row",
    marginLeft:10,
    marginRight:10,
    alignSelf:"center",
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
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
  },
  BoldText:{
    color:'#000000',
    textAlign:'center',
    fontSize:18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
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
  },

      ]
    }
