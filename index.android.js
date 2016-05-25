/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router,Scene} from 'react-native-router-flux';
import Guide from './Guide';
import AnimationCase from './example/animationCase';
import AnimatedSquare        from './example/AnimatedSquare';
import ChangeCard from './example/changeCard';
class Guide_Animations extends Component {
  render() {
    return (
        <Router>
            <Scene key="root">
                <Scene key="guide" component={Guide} title="Guide_Animations" initial={true}/>
                <Scene key="animationCase" component={AnimationCase} title="AnimationCase"/>
                <Scene key='animatedSquare' component={AnimatedSquare} title="AnimatedSquare"/>
                <Scene key='changeCard' component={ChangeCard} title="ChangeCard"/>
            </Scene>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Guide_Animations', () => Guide_Animations);
