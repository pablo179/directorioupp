import React, { Component } from 'react';
import { StyleSheet ,Text,Image,ScrollView,Dimensions,TouchableOpacity} from 'react-native';
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
          source={require('../media/miban.jpeg')}
        />
        <Text style={styles.descr}>
        La Dirección de Comunicación Social e Imagen Institucional de la Universidad Politécnica de 
        Pachuca, busca 
        </Text>

        <TouchableOpacity style={styles.cardcont} 
        onPress={()=>{
          this.props.navigation.navigate('Detail',{
            name:'PABLO DAVID CASTILLO MORALES',
            detalle:'Desarrollador en progreso, amante del desarrollo web, los stickers, el aprendizaje autodidacta,los videojuegos y la innovación tecnológica.',
            face:'https://www.facebook.com/pabito.navidad',
            twit:'https://twitter.com/pablodcm179',
            gmail:'castillo.morales.pablo.prog@gmail.com',
            insta:'https://www.instagram.com/pablo_david_cm',
            img:'http://res.cloudinary.com/dtqaqkhwv/image/upload/c_scale,h_857,q_59/v1532791819/WhatsApp_Image_2018-07-26_at_5.27.59_PM.jpg'
          })
        }}>
        <Image style={styles.card}
          source={require('../media/pablo.png')}
        />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardcont}
        onPress={()=>{
          this.props.navigation.navigate('Detail',{
            name:'FERNANDO HERNÁNDEZ ISLAS',
            detalle:'Estudiante de ingenieria en software, técnico en programación, con pasión por los videojuegos, el diseño y el desarrollo de programas',
            face:'https://www.facebook.com/fernando.islas.79',
            twit:'https://twitter.com/',
            gmail:'ferhis02@gmail.com',
            insta:'https://www.instagram.com/ferislas_98',
            img:'http://res.cloudinary.com/dtqaqkhwv/image/upload/c_scale,h_857,q_59/v1532791819/IMG_20180726_155529.jpg'
          })
        }}>
        <Image style={styles.card}
          source={require('../media/fer.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardcont}
        onPress={()=>{
          this.props.navigation.navigate('Detail',{
            name:'ISMAEL TRISTÁN ROMERO',
            detalle:'Estudiante de ingenieria en software, con enfoques al desarrollo de aplicaciones móviles, autodidacta y positivo con interés y pasión por las nuevas tecnologías.',
            face:'https://www.facebook.com/isma.tristanromero',
            twit:'https://twitter.com/Tri37293413',
            gmail:'Tristanromero026@gmail.com',
            insta:'https://www.instagram.com/isma_tristan/',
            img:'http://res.cloudinary.com/dtqaqkhwv/image/upload/c_scale,h_857,q_59/v1532791819/IMG_20180726_155649.jpg'
          })
        }}>
        <Image style={styles.card}
          source={require('../media/tris.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardcont}
        onPress={()=>{
          this.props.navigation.navigate('Detail',{
            name:'MAURICIO ZAVALA GÓMEZ',
            detalle:'Estudiante de ingeniería en Software, egresado como técnico en informática, con orientación por la programación web.',
            face:'https://www.facebook.com/mauricio.zavala.790',
            twit:'https://twitter.com/',
            gmail:'zavala3097@gmail.com',
            insta:'https://www.instagram.com/tuzoo_mauux/',
            img:'http://res.cloudinary.com/dtqaqkhwv/image/upload/c_scale,h_857,q_59/v1532791819/WhatsApp_Image_2018-07-26_at_9.56.28_PM.jpg'
          })
        }}>
        <Image style={styles.card}
          source={require('../media/mau.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardcont}
        onPress={()=>{
          this.props.navigation.navigate('Detail',{
            name:'UNIVERSIDAD POLITÉCNICA DE PACHUCA',
            detalle:'mision',
            face:'https://www.facebook.com/UPPachuca',
            twit:'https://twitter.com/UPPachuca',
            gmail:'upp@upp.edu.mx',
            img:'https://res.cloudinary.com/dtqaqkhwv/image/upload/v1535681161/download.jpg'
          })
        }}>
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
  },
  cardcont:{
    width:'99%',
    height:heightw*.30,
    alignSelf:'center',
    marginBottom:heightw*.02
  }
})
