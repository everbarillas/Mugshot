import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from "react-native-router-flux";

type Landing = {};
export default class App extends Component<Landing> {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('./images/logo.png')}/>
                <Text style={styles.about}>Connect with the world!</Text>
                <TouchableOpacity onPress={() => Actions.profile()}><View style = {styles.button}><Text style = {{color: '#E0E1DD'}}>Profile</Text></View></TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D1B2A',
    },

    image: {
        width: 280,
        height: 37
    },

    about: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#E0E1DD',
        paddingTop: '2%',
        paddingBottom: '10%'
    },

    button: {
        width: 300,
        height: 50,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        textAlign: 'center',
        color: '#0D1B2A',
        backgroundColor: '#778DA9',
    }
});
