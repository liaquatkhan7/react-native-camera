import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import Header from './src/component/header';
import Headerwithstyling from './src/component/styling';
import MakingInput from './src/component/input';
import Listing from './src/component/listing';
import ComponentOne from './src/component/component1';
import Component2 from './src/component/component2';
import Component3 from './src/component/component3';

// export default class App extends React.Component {
  // render() {
    // return(
      // <View>
        {/*<Header message='Hello world'/>*/}
        {/*<Headerwithstyling />*/}
        {/*<MakingInput />*/}
        {/*<Listing />*/}
        {/*<ComponentOne />*/}
        {/*<Component2 />*/}
      {/*</View>*/}
    // );
  // }
// }

export default class App extends React.Component {
  renderScene(route, navigator){
    switch(route.id){
      case 'Component2': 
      return(
        <Component2 navigator={navigator} title='component5' />
      )
      case 'Component3':
        return (
          <Component3 navigator={navigator} title='component3'/>
        )
    }
  }
  render() {
    return(
      <Navigator 
      initialRoute={{id:'Component2'}}
      renderScene={this.renderScene}
      configureScene={(route, reouteStack) => Navigator.SceneConfigs.FloatFromBottom} />
    );
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
