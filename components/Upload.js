import * as React from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";

import Svg, { Path } from "react-native-svg";

const BackIcon = () => {
    return (
        <Svg width={28} height={28} fill="none" viewBox="0 0 24 24">
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#FC3D39"
                strokeWidth={2}
                d="M15.75 19.5L8.25 12l7.5-7.5" />
        </Svg>
    );
}

const UploadIcon = () => {
    return (
        <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
            <Path
                d="M3 16.5V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75V16.5M7.5 7.5L12 3M12 3L16.5 7.5M12 3V16.5"
                stroke="#147EFB"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round" />
        </Svg>
    );
}


const Upload = ({ image, changePath, imageName, setImage, setImageName }) => {
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
                "User-Agent": "autodance_upload/1.0.0",
            },
        };
        const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/upload`, options)
        const data = await res.json();
        if (res.status == 200) {
            setImage("");
            setImageName("");
            changePath("/result");
        } else {
            console.log(data);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.back} onPress={() => changePath("/home")}>
                    <BackIcon />
                    <Text style={{ fontFamily: "Poppins_700Bold", marginLeft: 5, color: "#FC3D39", fontSize: 18 }} >
                        Back
                    </Text>
                </Pressable>
                <Pressable style={styles.upload} onPress={uploadImage}>
                    <Text style={{ fontFamily: "Poppins_700Bold", marginRight: 5, color: "#147EFB", fontSize: 18 }} >
                        Upload
                    </Text>
                    <UploadIcon />
                </Pressable>
            </View>
            <View>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 44,
        padding: 40,
    },
    buttonContainer: {
        position: "absolute",
        top: 64,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    back: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
    },
    upload: {
        flexDirection: "row",
        alignItems: "flex-end",
        columnGap: 8,
    },
    image: {
        width: 310,
        height: 310,
        resizeMode: 'contain',
    },
});

export default Upload;
