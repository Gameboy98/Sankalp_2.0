import React from 'react';
import { View, Text ,AsyncStorage, Image} from 'react-native';


export default class SplashScreen extends React.Component {

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    let isLogin =  await AsyncStorage.getItem("isLogIn");
    if(isLogin =="1"){
      this.props.navigation.navigate('Question');
    }else{
      this.props.navigation.navigate('Question');
    }
  }

  async storeData(response) {
    try {
        await AsyncStorage.getItem("isLogIn");
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Image
          style={{width: 264, height: 100}}
          source={require('../assets/sankalp.png')}/>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#079DA8'
  },
  textStyles: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold'
  }
}
