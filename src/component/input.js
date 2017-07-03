import React, {Component} from 'react';
import { Text , View, TextInput, Switch, StyleSheet } from 'react-native';

class MakingInput extends Component {
    constructor(){
        super();
        this.state = {
            textValue1: 'ok',
            switchValue: false

        }
    }

    changeText(value){
        this.setState({
            textValue: value
        })
    }

    onsubmit(){
    
        console.log('Input submited....!')
    }

    switchChange(value){
        this.setState({
            switchValue: value
        })
    }

    render(){
        return(
            <View style={styles.vStyle}>
                <Text>Creating Input Fields</Text>
                <TextInput 
                    placeholder='Enter Text'
                    onChangeText={(value) => this.changeText(value)}
                    onSubmitEditing={this.onSubmit} />

                <Text>{this.state.textValue}</Text>
                <Switch 
                    value={this.state.switchValue}
                    onValueChange={ (value) => this.switchChange(value)} />
            </View>)
    }
}
export default MakingInput;


// onSubmitEditing={this.onSubmit}
const styles = StyleSheet.create({
    vStyle: {
        marginTop: 25
    }
})

