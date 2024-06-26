import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GOOGLE_MAPS_APIKEY } from "@env";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch} from "react-redux";
import {setDestination, setOrigin } from "../slices/navSlice";
const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white w-full h-full`}>
      <View style={tw`p-2`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description, 
            }))
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          requestUrl={{
            useOnPlatform: "all", // or "all"
            url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api", // or any proxy server that hits https://maps.googleapis.com/maps/api
            headers: {
              Authorization: `an auth token`, // if required for your proxy
            },
          }}
          autoFocus={true}
          styles={{
            container:{
              alignContent: 'center',
            },
            textInput: {
              height: 48,
              color: '#333333',
              fontSize: 20,
              width: 100,
              height: 50,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
