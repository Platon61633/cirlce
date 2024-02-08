import { useState } from 'react';
import { StyleSheet,SafeAreaView, View, Text, Pressable } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView} from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
  import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
  } from 'react-native-reanimated';
import styled from 'styled-components';

const Ball = styled.View`
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  position: 'relative';
  display: 'inline-block';
  padding: 80px;
  border-radius: 100%;
`

export default function App() {
    const imageSize = 40;
    const stickerSource = require('./assets/images/emoji2.png')
    

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const scaleImage = useSharedValue(imageSize);
    const [F , SetF] = useState(true);
    
  
    const imageStyle = useAnimatedStyle(() => {
      return {
        width: withSpring(scaleImage.value),
        height: withSpring(scaleImage.value),
      };
    });
  
    const drag = Gesture.Pan()
      .onChange((event) => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
        // translateY.value<0?console.log('-'):console.log('+')
      });
  
    const containerStyle = useAnimatedStyle(() => {
      
      console.log(translateY.value);
      // SetTransY(translateY)
      return {
        transform: [
          {
            translateX: translateX.value,
          },
          {
            translateY: translateY.value,
          },
        ],
      };
    });

    const SpanC = useAnimatedStyle(()=>
      {
        return{
        transform: [
          {
            scaleY: Math.abs((translateY.value)/150)<=1?(translateY.value)/150:1
          }
        ]
      }}
    )
  

  return (
    <SafeAreaView style={styles.container}>
      <Text>tyccccccccccccccccccccccccccccccccccccccccccccccccc
        cghhhhhhhhhh
        vhvjhvjh
        vjhvjhhhhhhhhhhhhhh
        vgcccccccccccccccccccccccc
      </Text>
    <GestureHandlerRootView style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0.5}} end={{x: 0, y: translateY.value<0 ? 0 : 1}}
        locations={[0, 0]}
        colors={['#000', '#888']}
        style={styles.ball}
      >
        <Animated.View style={[SpanC, styles.Spanball]}></Animated.View>
      </LinearGradient>
      <Pressable onPress={e=>
        F?SetF(false):SetF(true)}>
      <Text style={{fontSize: 50}}>click</Text></Pressable>
      
<View style={styles.pr}>
            <Text style={{color: 'red'}}>yguyiuggggggggggggggggggggggf</Text>
      <GestureDetector style={styles.pr} gesture={drag}>
        <Animated.View style={[containerStyle]}>
          
            <Animated.Image
              source={stickerSource}
              resizeMode="contain"
              style={[imageStyle, { width: imageSize, height: imageSize }]}
            />
          
        </Animated.View>
      </GestureDetector></View>
      </GestureHandlerRootView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  ball: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    display: 'inline-block',
    padding: 80,
    borderRadius: '100%'

    
  },
  
      
  Spanball: {
    padding: 77,
    position: 'absolute',
    inset: 0,
    borderRadius: '100%',
    backgroundColor: '#888',

  },
  pr:{
    backgroundColor: 'black',
    color: 'red',
    
  },
});
