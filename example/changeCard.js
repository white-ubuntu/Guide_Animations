import React from 'react';
import {
  StyleSheet,
  View,
   Text,
   Animated,
    PanResponder,
} from 'react-native';
const SQUARE_DIMENSIONS=100;
export default class ChangeCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pan:new Animated.ValueXY()
        };
    }
    getStyle(){
        return [
          styles.square,
            {
                transform:this.state.pan.getTranslateTransform()
            }
        ];
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={this.getStyle()}></Animated.View>
            </View>
        );
    };
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItem:'center',
        justifyContent:'center'
    },
    square:{
        width:SQUARE_DIMENSIONS,
        height:SQUARE_DIMENSIONS,
        backgroundColor:'blur'
    }
}
)