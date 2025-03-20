import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

import coffeeBG from "@/assets/images/coffeeBG.jpg"

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={coffeeBG}
        style={styles.image}
      >
        <Text style={styles.text}>Coffee app</Text>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
})

export default index