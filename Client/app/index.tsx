import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Text className="text-black">index</Text>
      <Link href={"/(tabs)/explore"}>
        <Text className="text-blue-800 font-bold text-4xl">Get Started</Text>
      </Link>
    </View>
  );
};

export default Home;
