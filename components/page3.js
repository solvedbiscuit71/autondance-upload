import { View, Text, Pressable, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const Page3 = ({ pageChange }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.screen} onPress={() => pageChange(1)}>
        <Svg width={128} height={128} viewBox="0 0 96 96" fill="none">
          <Path
            d="M36 51L45 60L60 39M84 48C84 52.7276 83.0688 57.4089 81.2597 61.7766C79.4505 66.1443 76.7988 70.1129 73.4558 73.4558C70.1129 76.7988 66.1443 79.4505 61.7766 81.2597C57.4089 83.0688 52.7276 84 48 84C43.2724 84 38.5911 83.0688 34.2234 81.2597C29.8557 79.4505 25.8871 76.7988 22.5442 73.4558C19.2012 70.1129 16.5495 66.1443 14.7403 61.7766C12.9312 57.4089 12 52.7276 12 48C12 38.4522 15.7928 29.2955 22.5442 22.5442C29.2955 15.7928 38.4522 12 48 12C57.5478 12 66.7045 15.7928 73.4558 22.5442C80.2072 29.2955 84 38.4522 84 48Z"
            stroke="#2C3C43"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
        <Text
          style={[
            { fontFamily: "Poppins_700Bold", fontSize: 40, color: "#2C3C43" },
          ]}
        >
          Success
        </Text>
        <View style={styles.message}>
          <Text
            style={[
              {
                fontFamily: "Poppins_400Regular",
                fontSize: 16,
                color: "#2C3C43",
              },
            ]}
          >
            Your Photo has been Uploaded
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    position: "absolute",
    bottom: 100,
    width: "auto",
    height: "auto",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
export default Page3;
