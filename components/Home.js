import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import * as ImagePicker from "expo-image-picker";

const Divider = () => {
    return (
        <View style={dividerStyles.container}>
            <View style={dividerStyles.line}></View>
            <Text style={dividerStyles.text}>OR</Text>
            <View style={dividerStyles.line}></View>
        </View>
    );
};

const dividerStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 16,
    },
    line: {
        flex: 1,
        height: 3,
        backgroundColor: "#495B72",
    },
    text: { 
        fontFamily: "Poppins_700Bold",
        color: "#495B72",
        fontSize: 22,
    },
})


const Home = ({ changePath, setImage, setImageName }) => {
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
                setImageName(result.assets[0].uri.split("/").pop());
                changePath("/upload");
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
                    <Text style={{ color: "#2C3C43", fontSize: 18, fontFamily: "Poppins_700Bold" }}>
                        Take Photo
                    </Text>
                </Pressable>
            </View>

            <Divider />

            <View style={styles.lowerHalf}>
                <Image source={require("../assets/gallery.png")}></Image>
                <Pressable style={styles.selectImage} onPress={pickImage}>
                    <Text style={{ color: "#FFFFFF", fontSize: 18, fontFamily: "Poppins_700Bold" }}>
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
        padding: 40,
    },
    upperHalf: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 32,
    },
    lowerHalf: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 32,
    },
    clickImage: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 18,
        paddingHorizontal: 28,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#2C3C43",
        backgroundColor: "#00000000",
    },
    selectImage: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 18,
        paddingHorizontal: 28,
        borderRadius: 12,
        backgroundColor: "#71ABEF",
    },
});

export default Home;
