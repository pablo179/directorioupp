import React, { Component } from 'react';
import { StyleSheet,View ,Text,Image,ScrollView,Dimensions,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import {Icon,Button} from 'react-native-elements'
const SideMenu = require('react-native-side-menu');
var heightw = Dimensions.get('window').height;
var widthw  =Dimensions.get('window').width;

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
  this.state = {
    shoinp: false
  }
  }
    static navigationOptions = {
      header:null
  };
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',}} >

        <Image style={styles.banner}
          source={require('../media/banner.jpeg')}
        />
        <Text style={styles.descr}>
        Desarrollador en progreso, amante del desarrollo web, los stickers, el aprendizaje
        autodidacta, los videojuegos y la innovación tecnológica.
        </Text>
        <View>
            
        </View>
      </View>
    );
  }
}
const styles =StyleSheet.create({
  fondo:{
    width:'100%',
    height:'100%',
    position: 'relative',
    backgroundColor: 'white'
  },
  banner:{
    width:widthw,
    height:heightw*.40,
    margin: 0,
    padding: 0,
  },
  descr:{
    width:'100%',
    alignContent: 'center',
    alignItems: 'center',
    padding: '6%',
    fontFamily: 'Quicksand-Medium',
    fontSize: 13,
  },
  card:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
})
