import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.body}>
      <ImageBackground source={require("../images/DSC06549 copy2.png")} style={styles.backgroundImage}/>
      <View style={styles.opacityMask}/>
      <View style={styles.main}>
        <Text style={styles.title}>Ivor Rosa</Text>
        <Text style={styles.subtitle}>Memories out of frames</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  body:
  {
    flex: 1,
    alignItems: "center",
  },

  backgroundImage:
  {
    ...StyleSheet.absoluteFillObject,
  },

  opacityMask:
  {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000000",
    opacity: 0.5
  },

  main:
  {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },

  title:
  {
    fontSize: 64,
    fontWeight: "bold",
    color: "#FFFFFF"
  },

  subtitle:
  {
    fontSize: 36,
    color: "#f0f0f0",
  },

});
