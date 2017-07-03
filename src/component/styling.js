import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

class Headerwithstyling extends Component {
    onpress(){
        console.log('Area Press')
    }

    render(){
        return (
            <View style={styles.mainContainer}>
                
                <View style={styles.myView}>
                    <Text style={styles.myText}>Some thing with styling</Text>
                </View>

                <View style={styles.container}>
                    <TouchableHighlight 
                        onPress={this.onpress} 
                        style={styles.v1} 
                        underlayColor='grey'>
                        <View >
                            <Text style={styles.viewText}> View 1 </Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableOpacity 
                        onPress={this.onpress} 
                        style={styles.v2} 
                        underlayColor='blue'>
                        <View >
                            <Text style={styles.viewText}> View 2 </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableHighlight onPress={this.onpress} style={styles.v3} underlayColor='green'>
                        <View>
                            <Text style={styles.viewText}> View 3 </Text>
                        </View>
                    </TouchableHighlight>
                </View>

           </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 30
    },

    myView: {
        backgroundColor: 'blue',
        
    },

    container: {
        flexDirection : 'row',
        height: 100
    },

    v1: {
        flex: 1,
        backgroundColor: 'yellow',
        padding: 10
    },

    v2: {
        flex: 1,
        backgroundColor: 'green',
        padding: 10
    },

    v3: {
        flex: 1,
        backgroundColor: 'red',
        padding: 10
    },

    myText: {
        color: 'red'
    },

    viewText: {
        textAlign: 'center',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    }
})

export default Headerwithstyling;