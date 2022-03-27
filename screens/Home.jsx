import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTab from "../components/home/HeaderTab";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItem from "../components/home/RestaurantItem";
import { localRestaurants } from "../components/home/LocalRestautants";
import yelp from "../api/yelp";
import BottomTab from "../components/home/BottomTab";
import { Divider } from "react-native-elements";

const YELP_API_KEY =
  "EdDghzrWXhLM3IVSDLyv0UmqKptnBas79ABi8Vmlyk0MOFBFip_azg1AYIe43hVrcjgdwiGmf4SSmY9uSuPgsn2RSZti81fumCoD9YKxGj8nnk8pvFQVMzwFrbs_YnYx";

export default function Home({navigation}) {
  const [restaurants, setRestaurants] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Pickup");

  const getRestaurantsFromYelp = async (id) => {
    const getRestaurant = await yelp
      .get(`/search?term=restaurants&location=${city}`)
      .then((res) => {
        const result = res.data.businesses.filter((business) =>
          business.transactions.includes(activeTab.toLowerCase())
        );
        if (activeTab === "All") {
          setRestaurants(res.data.businesses);
        } else {
          setRestaurants(result);
        }
      })
      .catch((err) => setRestaurants([]));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories />
        {restaurants?.length > 0 ? (
          <RestaurantItem restaurants={restaurants} navigation={navigation} />
        ) : (
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              marginTop: 20,
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {`No restaurant for ${activeTab} at this area. Please try another city or change collection mode at the top of the screen`}{" "}
            </Text>
          </View>
        )}
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </SafeAreaView>
  );
}
