import { View, Text, Image } from "react-native";
import React from "react";

// mocked data used for testing before getting from route param
// const yelpRestaurantInfo = {
//   image:
//     "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
//   name: "Fosy Kitchen",
//   description: " This is a restaurant   🎫 ⭐ ",
//   price: "$$",
//   categories: [{ title: "African" }, { title: "Chineese" }],
//   rating: "4.5",
//   reviews: "1500",
// };
const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = ({ name }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
);

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {description}
  </Text>
);

const About = ({route}) => {
  const { name, image, price, reviews, rating, categories } =
  route.params;

  const formattedCategories = categories
    .map((category) => category.title)
    .join(" • ");
  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;
