import React,{Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

class Stylingone extends Component {
    onpres(){
        let num = 1 + num; 
        console.log(num)
    }
    render(){
        return (
            <View style={styles.mainView}>
                <View style={styles.headingView}>
                    <Text style={styles.headingText}>New Styling going to be here</Text>
                </View>
                <View style={styles.fContainer}>
                    <TouchableHighlight onPres={this.onpres} style={styles.v1} underlayColor='grey'>
                        <View>
                            <Text>flex one</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.v2} onPress={this.onpres} underlayColor='grey'>
                        <View>
                            <Text>flex two</Text>
                        </View>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.v3} onPress={this.onpres} underlayColor='grey'>
                        <View>
                            <Text>flex three</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: 30
    },
    headingView: {
        backgroundColor: 'yellow'
    },
    headingText: {
        color: 'blue',
        fontSize: 14
    },
    fContainer: {
        flexDirection: 'row',
        height: 100
    },
    v1: {
        flex: 1,
        height: 100,
        padding: 5,
        
    }, 
    v2: {
        flex: 1,
        height: 100,
        padding: 5
    }, 
    v3: {
        flex: 1,
        height: 100,
        padding: 5,
    }
})