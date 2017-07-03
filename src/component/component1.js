import React, {Component} from 'react';
import {View, Text, StyleSheet, ListView} from 'react-native';

class ComponentOne extends Component {
   constructor(){
    super()
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource: ds,
        };
    }

    componentDidMount(){
        this.fetchUsers();
    }

    fetchUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    userDataSource: this.state.userDataSource.cloneWithRows(response)
                });
            });
    }

    renderRow(user, sectiond, rowid, highlightRow){
        return(
            <View style={styles.row}>
                <Text style={styles.rowText}> {user.name} </Text>
            </View>
        )
    }

    render(){
        return(
        <ListView 
            dataSource={this.state.userDataSource}
            renderRow={this.renderRow.bind(this)}
        />
        );
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

export default ComponentOne;