import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";

import * as Font from "expo-font";
import { Poppins_700Bold, Poppins_400Regular, } from "@expo-google-fonts/poppins";

import Home from "./components/Home";
import Upload from "./components/Upload";
import Result from "./components/Result";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [path, setPath] = useState("/home");
    const [image, setImage] = useState("");
    const [imageName, setImageName] = useState("");

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({ Poppins_400Regular, Poppins_700Bold });
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    const changePath = (newPath) => {
        if (newPath === "/home" || newPath === "/upload" || newPath === "/result") {
            setPath(newPath);
        }
    }

    const handlePathChange = () => {
        if (path === "/home") {
            return (
                <Home
                    setImage={setImage}
                    setImageName={setImageName}
                    changePath={changePath}
                />
            );
        }
        if (path === "/upload" && image) {
            return (
                <Upload
                    image={image}
                    imageName={imageName}
                    setImage={setImage}
                    setImageName={setImageName}
                    changePath={changePath}
                />
            );
        }
        if (path === "/result") {
            return <Result changePath={changePath} />;
        }
    };

    if (!appIsReady) {
        return null;
    }

    return (
        <LinearGradient colors={["#4FE6C1", "#16ECEC34"]} style={styles.gradient} onLayout={onLayoutRootView}>
            {handlePathChange()}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
    },
});
