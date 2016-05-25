import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
} from 'react-native';
const SQUARE_DIMENSIONS=30;

const SPRING_CONFIG={tension:2,friction:1};
export default class AnimatedSquare extends React.Component {
    constructor(props){
        super(props);
        this.state={
            pan:new Animated.ValueXY(),
        }
    };
    getStyle(){
        return [styles.square,
            {
                transform:this.state.pan.getTranslateTransform()
            }
        ];
    };
    render() {
        return (
            <View style={styles.example}>
                <Animated.View style={this.getStyle()} />
            </View>
        );
    };
    componentDidMount(){
        this.startAndReap();
    };
    startAndReap(){

       this.triggerAnimation(this.startAndReap);
    };
    triggerAnimation(cp){
        Animated.sequence([
            Animated.spring(this.state.pan,{
                ...SPRING_CONFIG,
                toValue:{x:0,y:170}
            }),
            Animated.spring(this.state.pan,{
                ...SPRING_CONFIG,
                toValue:{x:100,y:170}
            }),
            Animated.spring(this.state.pan,{
                ...SPRING_CONFIG,
                toValue:{x:100,y:80}
            }),
            Animated.spring(this.state.pan,{
                ...SPRING_CONFIG,
                toValue:{x:0,y:0}
            })
        ]).start(cp);
    };

};

 const styles=StyleSheet.create({
    example:{
        flex:1,
        width:200,
        borderWidth:1,
        backgroundColor:'red',
    },
     square:{
         width:SQUARE_DIMENSIONS,
         height:SQUARE_DIMENSIONS,
         backgroundColor:'blue',
     }
});