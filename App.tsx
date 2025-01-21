import React from 'react';
import { View, Text, StyleSheet, Alert, ImageBackground, Dimensions, StatusBar, TouchableOpacity } from 'react-native';


const { width, height } = Dimensions.get('window');

export default function App() {
  const handleShowMorePosts = () => {
    Alert.alert(
      'No More Posts',
      'No recent post',
      [
        {
          text: 'Close',
          onPress: () => console.log('Alert closed'),
          style: 'cancel',
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />

     
      <ImageBackground
        source={require('./assets/WhatsApp Image 2025-01-19 at 15.10.55_74ba9409.jpg')} 
        style={styles.image}
        resizeMode="cover"
      >

        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleShowMorePosts}>
            <Text style={styles.buttonText}>Show More Posts</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      
      <View style={styles.header}>
        <Text style={styles.title}>App Clone</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  image: {
    width: width, 
    height: height * 0.9, 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
  },
  bottomButtonContainer: {
    marginBottom: 30, 
    alignItems: 'center', 
  },
  button: {
    backgroundColor: '#6200ea', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    
     
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', 
  },
  header: {
    height: height * 0.1, 
    backgroundColor: '#6200ea',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  title: {
    fontSize: 22, 
    fontWeight: 'bold',
    color: '#fff',
  },
});
