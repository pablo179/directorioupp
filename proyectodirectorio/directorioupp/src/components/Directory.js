import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    View, 
    ListView, 
    TextInput, 
    Alert,
    NativeModules,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import {Icon,Button} from 'react-native-elements'
import Modal from "react-native-modal";
import call from 'react-native-phone-call'
const { UIManager } = NativeModules;
var heightw = Dimensions.get('window').height;
var widthw  =Dimensions.get('window').width;
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class MyProject extends Component {
    static navigationOptions = {
        header: null,
    };
    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible});
    _togglesearch=()=>
    this.setState({ issearchvisible: !this.state.issearchvisible});
    _toggleMenu=()=>
    this.setState({ismenuvisible:!this.state.ismenuvisible});
    _togglefilteropen=()=>
    this.setState({filteropen:!this.state.filteropen});
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            text: '',
            isModalVisible:false,
            noconnection: false,
            promod:{},
            issearchvisible:false,
            ismenuvisible:false,
            filteropen:false,
        }
        this.arrayholder = [] ;
    }
    componentDidMount() {
        return fetch('https://directoriouppapi.herokuapp.com/profiles/')
        .then((response) => response.json())
        .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
                isLoading: false,
                dataSource: ds.cloneWithRows(responseJson)
            }, function() {
                this.arrayholder = responseJson;
            });
        })
        .catch((error) => {
            this.setState({isLoading: false, noconnection:true});
        });
    }

    SearchFilterFunction(text){
        const newData = this.arrayholder.filter(function(item){
            const itemData = item.nombre.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData),
            text: text
        })
    }
    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: 5,
                    width: "100%",
                }}
            />
        );
    }
    ListViewItemSeparator2 = () => {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor:'#EDEDED',
                    width: "100%",
                    marginTop:'1%',
                    marginBottom:'1%'
                }}
            />
        );
    }
    GetListViewItem (profchoose) {
    this.setState({promod:profchoose})
    this.setState({ isModalVisible: !this.state.isModalVisible});
       }
    GetFilterItem(filter){
        Alert.alert(filter)
    }
    render() {
        const { navigate } = this.props.navigation;
        if (this.state.isLoading) {
            return (
                <View style={styles.intro}>
                    <Image 
                    style={styles.imglog}
                    source={require('../media/upp.png')}/>
                </View>
            );
        }
        acerca=()=>{
            // this.setState({ismenuvisible:false})
            // this.props.navigation.navig('Main')
            const args={
                number: '7717721362',
                prompt:false
            }
            call(args).catch(Alert.alert('imposible realizar llamada'));
            
        }
        return (
            <View style={styles.intro}>
                <View style={styles.navbar}>
                    <Icon
                        name='menu'
                        type='simple-line-icon'
                        color='white'
                        onPress={this._toggleMenu}
                    />
                    {!this.state.issearchvisible ? 
                        <Text style={styles.title}> Directorio Administrativo </Text>
                        :
                        <TextInput 
                            autoFocus={true}
                            style={styles.barsea}
                            onChangeText={(text) => this.SearchFilterFunction(text)}
                            value={this.state.text}
                            underlineColorAndroid='transparent'
                            placeholder="Search Here"
                            clearTextOnFocus={true}
                            placeholderTextColor='white'
                        />
                    }
                        <Icon
                            name='search'
                            type='feather'
                            color='white'
                            onPress={this._togglesearch}
                        />
                </View>

                <ListView
                    style={{width:'100%'}}
                    dataSource={this.state.dataSource}
                    renderSeparator= {this.ListViewItemSeparator}
                    enableEmptySections={true}
                    renderRow={(rowData) => 
                        <TouchableOpacity
                        onPress={this.GetListViewItem.bind(this,rowData)}
                            style={{paddingLeft: '7.69%',paddingTop:'4.54%'}}
                        >            
                            <View style={styles.procon}>
                                <Image style={styles.proima} 
                                    source={{uri:rowData.imaurl}}
                                />
                                <Text style={styles.pronom}>
                                    {rowData.nombre}
                                </Text>
                                <Text style={styles.procar}>
                                    {rowData.cargo}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    }
                />
                <Modal 
                    isVisible={this.state.isModalVisible} 
                    onBackdropPress={this._toggleModal}
                    style={styles.mimodal}
                >
                    <View style={styles.detcon}>
                        <Image style={styles.modimg} 
                        source={{uri:this.state.promod.imaurl}}/>

                        <View style={styles.modline}>
                            <Icon
                                name='user'
                                type='feather'
                                color='gray'
                            />
                            <Text 
                                style={styles.modcam}
                            >
                                {this.state.promod.nombre} 
                            </Text>
                        </View>

                        <View style={styles.modline}>
                            <Icon
                                name='map-pin'
                                type='feather'
                                color='gray'
                            /> 
                            <Text style={styles.modcam}>
                                {this.state.promod.area} 
                            </Text>
                        </View>
                    <View style={styles.modline}>
                        <Icon
                            name='work'
                            type='materialicon'
                            color='gray'
                        /> 
                        <Text style={styles.modcam}>
                            {this.state.promod.cargo} </Text>
                    </View>
                    <View style={styles.modline}>
                        <Icon
                            name='mail'
                            type='feather'
                            color='gray'
                        /> 
                        <Text style={styles.modcam}> 
                            {this.state.promod.correo} </Text>
                    </View>
                    <View style={styles.modline}>
                        <Icon
                            name='phone'
                            type='feather'
                            color='gray'
                        /> 
                        <Text style={styles.modcam}>
                            Ext: {this.state.promod.ext} </Text>
                    </View>
                        <Button
                            title='Aceptar'
                            size={10}
                            color='white'
                            buttonStyle={{borderRadius:5,marginTop:'2%'}}
                            onPress={this._toggleModal}
                            clear
                        />
                    </View>
                </Modal>
                <Modal 
                    isVisible={this.state.ismenuvisible} 
                    onBackdropPress={this._toggleMenu}
                    style={styles.mencon}
                    animationIn={'slideInLeft'}
                    animationOut={'slideOutLeft'}
                >
                <View style={styles.menu}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'96%',height:'auto',marginTop:'4%'}}>
                        <Icon
                            name='gear'
                            type='evilicon'
                            color='gray'
                            size={1}
                        />
                        <Icon
                            name='chevron-left'
                            type='entypo'
                            color='gray'
                            size={33}
                            onPress={this._toggleMenu}

                            />
                    </View>
                <TouchableOpacity style={styles.filtercon} onPress={acerca}>
                    <Icon
                        name='info'
                        type='feather'
                        color='gray'
                        size={27}
                    />
                    <Text> Acerca de </Text>
                    <Icon
                        name='info'
                        type='feather'
                        color='gray'
                        size={1}
                    />
                </TouchableOpacity>     
                </View>
                </Modal>
            </View>
        );
    }
}
 
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
    },
    navbar:{
        width: '100%',
        height: '10.59%',
        minHeight: heightw*.1059,
        backgroundColor:'#49176D',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    title:{
        color: 'white',
        fontFamily: 'Quicksand-Medium',
        fontSize: widthw*.037,
    },
    barsea:{
        padding: 0,
        borderWidth: 1,
        borderColor: 'gray', 
        width: '70.23%',
        height: '60.05%',
        borderRadius: 10,
        color: 'white',
        fontFamily: 'Quicksand-Medium',
        fontSize: 13,
        paddingLeft: 10,
    },
    procon:{
        position: 'relative',
        width: '94%',
        height: heightw*.2272,
        borderWidth: 1,
        borderColor: '#49176D',
        borderRadius: 8,
        paddingLeft:'33.27%',
        paddingTop:'2%',
        paddingRight:'1%'
    },
    proima:{
        position: 'absolute',
        width: '41.27%',
        height: '60%',
        borderRadius: 6,
        top:'20%',
        left: '7.69%'
    },
    pronom:{
        fontFamily: 'Quicksand-Medium', 
        paddingTop: '5%',
        
    },
    procar:{
        fontFamily: 'Quicksand-Medium', 
        paddingTop: '5%',
    },
    modcon:{
        width: '80%',
        height: '88%',
        backgroundColor:'#675F6D',
    },
    mimodal:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    detcon:{
        backgroundColor:'white',
        width: '88.23%',
        height: '88.81%',
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: '11.11%',
    },
    modimg:{
        width:'57.55%',
        height:'33.77%',
        borderRadius: 13,
        marginBottom: '4%',
    },
    modline:{
        width:'75.77%',
        flexDirection: 'row',
        alignContent: 'center',
    },
    modcam:{
        marginLeft: '3%',
        textAlignVertical: "center",
        height:'auto',
        paddingTop: '2.5%',
        paddingBottom: '2.5%',
        fontSize: widthw*.040,
    },
    mencon:{
        width:'100%',
        height:'100%',
        padding:0,
        margin: 0,
    },
    menu:{
        width:'75%',
        height:'100%',
        backgroundColor:'white'
    },
    filtercon:{
        width:'100%',
        height:heightw*.13,
        fontSize:heightw*.90,
        borderWidth:1,
        borderColor:'white',
        borderBottomColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlignVertical: 'center',
        paddingLeft: '6%',
        paddingRight: '6%',
    }
});