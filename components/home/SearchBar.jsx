import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesigns from "react-native-vector-icons/AntDesign";

const SearchBar = ({ setCity }) => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyDPUdYJofTfgS9mA6cuBsqErEFsmKWRft8" }}
        placeholder="Search"
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        onPress={(data, details = null) => {
          const city = data.description.split(",")[0];
          if (data) {
            setCity(city);
          }
        }}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesigns
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 700,
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
      />
    </View>
  );
};

export default SearchBar;
