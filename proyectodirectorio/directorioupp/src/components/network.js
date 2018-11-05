import React, { Component } from 'react';
import { 
    StyleSheet, 
    View,
    Image,
} from 'react-native';
import {Button} from 'react-native-elements'

export default class network extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
    }
    render() {
            return (
                <View style={styles.intro}>
                    <Image 
                    style={styles.imglog}
                    source={require('../media/upp.png')}/>
                    <Button
                        title='Recargar'
                        size={10}
                        color='white'
                        buttonStyle={{borderRadius:5,marginTop:'2%'}}
                        onPress={this.props.navigation.navigate('Directory')}
                        clear
                    />
                </View>
            );
             
const styles = StyleSheet.create({
    intro:{
        width:'100%',
        height:'100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#FCFCFF'
    },
    imglog:{
        width:'55%',
        height: '50.45%'
    }
});
}
}