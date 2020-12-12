import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

import Icon from 'react-native-vector-icons/AntDesign';

export default class extends React.Component {

  motion = (obj, start, end) => {
    Animated.timing(obj, { toValue: end }).start();
    obj.addListener(({ value }) => {
      if (value == end) {
        Animated.timing(obj, { toValue: start, duration: 1000, easing: Easing.inOut(Easing.quad) }).start();
      } else if (value == start) { 
        Animated.timing(obj, { toValue: end, duration: 1000, easing: Easing.inOut(Easing.quad) }).start();
      }
    });
  };

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(50);
    this.animatedValue2 = new Animated.Value(150);
    this.motion(this.animatedValue, 50, 100);
    this.motion(this.animatedValue2, 150, 250);
  }

  render() {
    return (
      <ImageBackground source={require('./assets/te.jpg')} style={styles.container}>
        <View style={styles.close_button_style}>
          <TouchableOpacity style={styles.Close_Button_Touchable}>
            <Icon name="close" size={18} color="#FFF" />
          </TouchableOpacity>
        </View>

        <Text style={styles.Wifi_Scanning_Text_Style}>
          Scanning Available Wifi...
        </Text>

        <View style={styles.Main_View}>
          <Animated.View
            style={{
              ...styles.Animated_View_Image,
              height: this.animatedValue,
              width: this.animatedValue,
            }}>
            <Image source={require('./assets/Text.png')} style={styles.Image_View} />
            <Animated.View style={{...styles.Animated_View_Style,
              width: this.animatedValue2,
              height: this.animatedValue2,               
            }} />
          </Animated.View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  close_button_style: {
    height: '15%',
    width: '100%',
    marginLeft: '10%',
    marginTop: '10%',
  },
  Close_Button_Touchable: {
    height: 40,
    width: 40,
    backgroundColor: 'rgba(225,225,225,0.1)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Wifi_Scanning_Text_Style: {
    fontSize: 18,
    color: '#FFF',
    marginLeft: '5%',
  },
  Main_View: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  Animated_View_Image: {
    borderRadius: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image_View: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
  },
  Animated_View_Style: {
    borderRadius: 360,
    backgroundColor: 'rgba(225,225,225,0.1)',
    position: 'absolute',
  },
});
