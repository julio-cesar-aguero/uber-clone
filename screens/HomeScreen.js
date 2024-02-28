import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_APIKEY } from "@env"; 
import NavOptions from "../components/NavOptions"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const HomeScreen = () => {
    console.log("Google",GOOGLE_MAPS_APIKEY);
    return (
        <SafeAreaView style={tw`bg-white w-full h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={
                        {
                            uri: 'https://links.papareact.com/gzs'
                        }
                    }
                />
                <GooglePlacesAutocomplete
                    placeholder='Where From ?'
                    style={{
                        container: {
                            flex: 0,
                        },
                        textInput:{
                            fontSize: 18,
                        }
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'es'
                    }}
                    debounce={400}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen

