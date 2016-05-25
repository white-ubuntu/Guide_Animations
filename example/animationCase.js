/**
 * Created by ijoy on 16-5-25.
 */
import React from 'react';
import {View,Text,Animated} from 'react-native';
export default class AnimationCase extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bounceValue:new Animated.Value(0),
        }
    }
    render(){
        return(
            <View style={{marginTop:100,marginLeft:10,flex:1}}>
                <Animated.Image
                    source={{uri:'http://i.imgur.com/XMKOH81.jpg'}}
                    style={{
                        flex:1,
                        transform:[
                            {scale:this.state.bounceValue},
                        ]
                    }}
                />
            </View>

        );
    }
    componentDidMount(){
        this.state.bounceValue.setValue(1.5);
        Animated.spring(
          this.state.bounceValue,
            {
                toValue:0.8,
                friction:1,
            }
        ).start();
    }
}

