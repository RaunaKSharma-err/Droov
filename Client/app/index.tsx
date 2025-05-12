import { View, Text } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { Activity, Airplay } from "@tamagui/lucide-icons";
import { Button, XStack, YStack } from "tamagui";

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
      <YStack padding="$3" gap="$3">
        <Link href={"/(tabs)"}>
          <Button
            color={"yellow"}
            backgroundColor={"blue"}
            onPress={() => router.push("/(tabs)")}
          >
            Get Started
          </Button>
        </Link>
      </YStack>
    </View>
  );
};

export default Home;
