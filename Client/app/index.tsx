import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Text style={{ color: "white" }}>Hello</Text>
      <Link href={"/(tabs)"}>
        <Text style={{ color: "white" }}>get started</Text>
      </Link>
    </View>
  );
};

export default Home;
