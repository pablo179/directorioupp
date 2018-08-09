import React, { Component } from 'react';
import { StyleSheet,View ,Text,Image,ScrollView,Dimensions,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
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
      <ScrollView style={{backgroundColor:'white',alignContent:'center',}} >
        <Image style={styles.banner}
          source={require('../media/banner.jpeg')}
        />
        <Text style={styles.descr}>
        La Dirección de Comunicación Social e Imagen Institucional de la Universidad Politécnica de 
        Pachuca, en busca de nuevas propuestas para generar un Ambiente de Sana Convivencia,
         pone puntual atención en la problemática de la Violencia que se da en las relaciones 
         interpersonales, buscando crear un mecanismo que propicie la reflexión y la toma de decisión.
        </Text>
        <TouchableOpacity style={{width:'99%',height:heightw*.30,alignSelf:'center',marginTop:heightw*.02,marginBottom:heightw*.02}}>
        <Image style={styles.card}
          source={require('../media/pablo.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={{width:'99%',height:heightw*.30,alignSelf:'center',marginBottom:heightw*.02}}>
        <Image style={styles.card}
          source={require('../media/fer.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={{width:'99%',height:heightw*.30,alignSelf:'center',marginBottom:heightw*.02}}>
        <Image style={styles.card}
          source={require('../media/tris.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={{width:'99%',height:heightw*.30,alignSelf:'center',marginBottom:heightw*.02}}>
        <Image style={styles.card}
          source={require('../media/mau.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={{width:'99%',height:heightw*.30,alignSelf:'center',marginBottom:heightw*.02}}>
        <Image style={styles.card}
          source={require('../media/uni.png')}
        />
        </TouchableOpacity>
      </ScrollView>
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
