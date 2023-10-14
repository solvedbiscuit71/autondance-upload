import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

const Page2 = ({ image, pageChange, imageName, setImage, setImageName }) => {
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", {
      uri: image,
      name: imageName,
      type: "image/jpeg",
    });
    const options = {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=---011000010111000001101001",
        "User-Agent": "autodance/1.0.0",
      },
    };
    fetch("http://11.12.8.248:8000/upload", options)
      .then((response) => {
        if (response.status == 200) {
          setImage(null);
          setImageName("");
          pageChange(3);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.back} onPress={() => pageChange(1)}>
          <Svg width={28} height={28} fill="none" viewBox="0 0 24 24">
            <Path
              strokeWidth={1.5}
              stroke="#FC3D39"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </Svg>
          <Text
            style={[
              { fontFamily: "Poppins_700Bold" },
              styles.backText,
              { marginLeft: 5 },
            ]}
          >
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.upload} onPress={uploadImage}>
          <Text
            style={[
              { fontFamily: "Poppins_700Bold" },
              styles.uploadText,
              { marginRight: 5 },
            ]}
          >
            Upload
          </Text>
          <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
            <Path
              d="M3 16.5V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75V16.5M7.5 7.5L12 3M12 3L16.5 7.5M12 3V16.5"
              stroke="#147EFB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      {image && (
        <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    top: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  back: {
    marginLeft: 35,
    flexDirection: "row",
  },
  upload: {
    marginRight: 35,
    flexDirection: "row",
  },
  backText: {
    color: "#FC3D39",
    fontSize: 18,
  },
  uploadText: {
    color: "#147EFB",
    fontSize: 18,
  },
});

export default Page2;
