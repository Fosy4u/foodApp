import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Icon = ({ text, icon, navigation }) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

const BottomTab = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <TouchableOpacity onPress={() => navigation.navigate("OrderCompleted")}>
        <Icon icon="receipt" text="Orders" />
      </TouchableOpacity>
      <Icon icon="user" text="Account" />
    </View>
  );
};

export default BottomTab;
