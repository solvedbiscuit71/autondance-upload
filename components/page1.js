import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Divider = () => {
  return (
    <View style={styles.divider}>
      <View style={styles.line}></View>
      <Text style={{ fontFamily: "Poppins_700Bold", color: "#2C3C43" }}>
        or
      </Text>
      <View style={styles.line}></View>
    </View>
  );
};

const Page1 = ({ pageChange, setImage, setImageName }) => {
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        setImageName(result.assets[0].uri.split("/").pop());
        pageChange(2);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperHalf}>
        <Image source={require("../assets/camera.png")}></Image>
        <Pressable style={styles.clickImage} onPress={pickImage}>
          <Text
            style={[
              { fontFamily: "Poppins_700Bold", color: "#495B72" },
              styles.clickText,
            ]}
          >
            Take Photo
          </Text>
        </Pressable>
      </View>

      <Divider />

      <View style={styles.lowerHalf}>
        <Image source={require("../assets/gallery.png")}></Image>
        <Pressable style={styles.selectImage} onPress={pickImage}>
          <Text style={[{ fontFamily: "Poppins_700Bold", color: "#FFFFFF" }]}>
            Choose Photo
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    rowGap: 64,
    padding: 35,
  },
  upperHalf: {
    alignItems: "center",
    rowGap: 32,
  },
  lowerHalf: {
    alignItems: "center",
    rowGap: 32,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#2C3C43",
  },
  clickImage: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 3,
    borderWidth: 2,
    borderColor: "#495B72",
    backgroundColor: "#BDCDD0",
  },
  selectImage: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#71ABEF",
  },
});

export default Page1;
