import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet } from "react-native";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import * as SplashScreen from "expo-splash-screen";
import { LinearGradient } from "expo-linear-gradient";
import {
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import * as Font from "expo-font";

/*
TODO:
2. refactor
  - convert rgb to hex
  - and so
3. change icon
4. export as standalone app
*/

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({ Poppins_700Bold, Poppins_400Regular });
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

  const pickPageToRender = () => {
    if (page === 1) {
      return (
        <Page1
          setImage={setImage}
          setImageName={setImageName}
          pageChange={(pageNum) => setPage(pageNum)}
        />
      );
    }
    if (page === 2) {
      return (
        <Page2
          image={image}
          imageName={imageName}
          setImage={setImage}
          setImageName={setImageName}
          pageChange={(pageNum) => setPage(pageNum)}
        />
      );
    }
    if (page === 3) {
      return <Page3 pageChange={(pageNum) => setPage(pageNum)} />;
    }
  };

  if (!appIsReady) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#4FE6C1", "#16ECEC34"]}
      style={styles.gradient}
      onLayout={onLayoutRootView}
    >
      {pickPageToRender()}
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
