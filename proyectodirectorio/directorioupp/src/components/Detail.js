import React, { Component } from 'react';
import { StyleSheet,View,Text,Image,Linking,Dimensions,ImageBackground,ScrollView} from 'react-native';
import {SocialIcon} from 'react-native-elements'
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
    const prof ={
      img: this.props.navigation.getParam('img'),
      name: this.props.navigation.getParam('name'),
      detalle: this.props.navigation.getParam('detalle'),
      face: this.props.navigation.getParam('face'),
      twit: this.props.navigation.getParam('twit'),
      gmail: this.props.navigation.getParam('gmail'),
      insta: this.props.navigation.getParam('insta'),
    }
    return (
      <ImageBackground source={require('../media/fondo.jpeg')} style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',}} >
        <View style={styles.imagen}>
         <Image style={styles.conima} source={{uri:prof.img}}/>
        </View>
        <Text style={styles.conname} > {prof.name} </Text>
        {prof.detalle!=='mision'? 
        <Text style={styles.condeta} >{prof.detalle}</Text>
        :
        <View style={{width:'100%',height:'40%',paddingTop:10}}>
        <ScrollView style={{width:'100%',height:'100%'}}>
        <Text style={styles.title}> MISIÓN </Text>
        <Text style={styles.mis}>
          Proporcionar educación superior de calidad, integral e incluyente, para formar profesionistas
          éticos, competentes, emprendedores e innovadores; comprometidos con el bienestar y desarrollo sustentable
          del Estado y del pais.
          </Text>
          <Text style={styles.title}> VISIÓN </Text>
        <Text style={styles.mis}>
          Ser un referente de educación superior con reconocimiento internacional por la formación
          academica de profesionistas con valores, emprendedores, calificados y especializados, cuyo alto
          desempeño en investigación e innovación impacte a los sectores productivos y de salud, contribuyendo al
          fortalecimiento del desarrollo sustentable del Estado y del país.
        </Text>
        </ScrollView>
        </View>
        }
        
        <View style={{width:'70%', height:'8%',justifyContent:'space-between',flexDirection: 'row'}}>
          <SocialIcon
          style={styles.iconst}
            button
            type='facebook'
            onPress={()=>{Linking.openURL(prof.face) }}
          />
          <SocialIcon
          style={styles.iconst}
            button
            type='twitter'
            onPress={()=>{Linking.openURL(prof.twit) }}
          />
          <SocialIcon
          style={styles.iconst}
            button
            type='google-plus-official'
            onPress={()=>{
              Linking.openURL('mailto:'+prof.gmail);}}
          />
{prof.insta ? 
          <SocialIcon
          style={styles.iconst}
            button
            type='instagram'
            onPress={()=>{Linking.openURL(prof.insta) }}
          />
          :
          <View></View>
}
        </View>
      </ImageBackground>
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
  conima:{
    width:widthw*.43,
    height:widthw*.43,
    borderRadius: widthw/2,
    marginBottom: 10,
  },
  conname:{
    fontFamily: 'Quicksand-Medium',
    color: 'white',
  },
  condeta:{
    fontFamily: 'Quicksand-Medium',
    color: 'white',
    padding: '8%',
    textAlign: 'center',
  },
  iconst:{
    height:widthw*.13,
    width: widthw*.13,
  },
  mis:{
    flexDirection: 'column',
    color: 'white',
    textAlign: 'center',
    width: '100%',
    justifyContent:'center',
    marginBottom: 10,
  },
  title:{
    color: 'white',
    textAlign: 'center',
    width: '100%',
    marginBottom: 10,
  }
})
