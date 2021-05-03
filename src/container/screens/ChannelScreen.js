import * as React from 'react';
import {Text, SafeAreaView, StyleSheet , Image, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

export default class ChannelScreen extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
      
      <View >
            <Image style = {styles.ImageIcon} source = {{uri : 'https://image.flaticon.com/icons/png/128/2907/2907248.png'}} />
              <Text style = {styles.Text}> Channel Screen</Text>
          </View>
     
    </View>
  );
}
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent : 'center',
  alignItems : 'center'
},
ImageIcon : {
  height : 150,
  width :  150,
  marginLeft : 30
},
Text : {
 fontWeight : 'bold',
 fontSize : 30
}

});
 