import React, {Component} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from "react-native-router-flux";

type Profile = {};
export default class App extends Component<Profile> {
    constructor(props){
        super(props);
        this.state ={ isLoading: true};
    }

    componentDidMount(){
        return fetch('https://randomuser.me/api/')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.results,
                }, function(){});
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render() {
        return (
            <View data={this.state.dataSource}>
                <FlatList data={this.state.dataSource}
                          renderItem={({item}) =>
                              <View  style={styles.main}>
                                  <View style={styles.container}>
                                      <Image style={styles.image} source={{uri: item.picture.medium}}/>
                                      <Text style = {styles.name}>{item.name.first + ' ' + item.name.last}</Text>
                                  </View>
                                  <Text style = {styles.rest}>Username: {item.login.username}</Text>
                                  <Text style = {styles.rest}>Gender: {item.gender}</Text>
                                  <Text style = {styles.rest}>Age: {item.dob.age}</Text>
                                  <Text style = {styles.rest}>Phone: {item.cell}</Text>
                                  <Text style = {styles.rest}>Resides in: {item.location.street + "\n" + item.location.city + " " + item.location.state + " " + item.location.postcode}</Text>
                                  <TouchableOpacity onPress={() => Actions.movie()}><View style = {styles.button}><Text style = {{color: '#E0E1DD'}}>Favorite Movies</Text></View></TouchableOpacity>

                              </View>
                          }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    main: {
        flex: 1,
        margin: 20
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        marginTop: 20,
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 60
    },

    name: {
        fontSize: 28,
        color: '#1B263B',
        paddingTop: '2%',
        paddingBottom: '2%'
    },

    rest: {
        fontSize: 20,
        color: '#415A77',
        paddingBottom: '2%'
    },

    button: {
        width: 300,
        height: 50,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        textAlign: 'center',
        color: '#0D1B2A',
        backgroundColor: '#778DA9',
    }
});
