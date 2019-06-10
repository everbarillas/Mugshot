import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList, ScrollView} from 'react-native';

type Movies = {};
export default class App extends Component<Movies> {
    constructor(props){
        super(props);
        this.state ={ isLoading: true};
    }

    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function(){});
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render() {
        return (
            <ScrollView>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                              <View style={styles.container}>
                                  <Text style={styles.movie}>{item.title}, {item.releaseYear}</Text>
                              </View>
                          }/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        backgroundColor: '#0D1B2A',
        borderRadius: 2,
        marginTop: '10%',
        marginStart: '10%',
        marginEnd: '10%',
        padding: '8%',
        shadowColor: '#0D1B2A',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10,
        shadowRadius: 2,
        elevation: 10,
    },

    movie: {
        fontSize: 20,
        color: '#E0E1DD',
        paddingTop: '2%',
        paddingBottom: '2%'
    },
});
