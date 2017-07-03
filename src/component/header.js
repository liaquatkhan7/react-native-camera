import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Header extends Component {

    constructor(){
        super();
        this.state = {
            name: 'Liaquat Ali Khan',
            showname: true,
            work: 'Web Developer'
        }
    }

    render(){
        let name = this.state.showname ? this.state.name : 'No Name';
        return (
            <View>
                <Text>This is from another app</Text>
                <Text>{this.props.message}</Text>
                <Text>{name}</Text>
                <Text>{this.state.work}</Text>
            </View>
        )
    }
}
export default Header;