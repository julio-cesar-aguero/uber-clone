import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  Touchable,
  TouchableOpacity,
  Pressable,
  View,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
];

const NavOptions = () => {
    const navigation = useNavigation();
  return (
    <FlatList
      style={tw`mt-14`}
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          onPressIn={(event) => {
            navigation.navigate(item.screen);
            event.stopPropagation();
           
          }}
          key={item.id}
          style={tw`p-4 pl-6 pb-2 pt-8 bg-gray-200 m-2 w-40`}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt- text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-white rounded-full w-10 mt-4`}
              name="arrowright"
              color="black"
              type="antdesign"
            />
          </View>
        </Pressable>
      )}
    />
  );
};

export default NavOptions;
