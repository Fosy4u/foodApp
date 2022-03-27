import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const HeaderTab = ({activeTab, setActiveTab}) => {
  
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Deliery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="All"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTab;

const HeaderButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => props.setActiveTab(props.text)}
        style={{
          backgroundColor: props.activeTab===props.text? 'black': 'white',
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30,
        }}
      >
        <Text
          style={{ color:  props.activeTab===props.text? 'white': 'black', fontSize: 15, fontWeight: "bold" }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
