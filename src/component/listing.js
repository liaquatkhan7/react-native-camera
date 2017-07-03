import React, {Component} from 'react';
import {View, Text, StyleSheet, ListView} from 'react-native';

const users = [
    {name: 'Liaquat ali khan'},
    {name: 'Salman khan'},
    {name: 'haleem khan'},
    {name: 'Kamran Khan'}
    ]



class Listing extends Component {
    constructor(){
    super()
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userdataSource: ds.cloneWithRows(users)
        }
    }

    renderRow(user, sectionid, rowid, highlightrow){
        return(
        <View style={styles.row}>
            <Text style={styles.rowText}>{user.name}</Text>
        </View>)
    }

    render(){
        return (
            <ListView 
                dataSource = {this.state.userdataSource}
                renderRow={this.renderRow.bind(this)} />
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'grey',
        marginBottom: 3
        
    },
    rowText: {
        flex: 1
    }
})

export default Listing;