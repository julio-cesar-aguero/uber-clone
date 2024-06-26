import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import NavOptions from "../components/NavOptions"
import Map from '../components/Map';
const MapScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white w-full h-full`}>
            <View>
                <View style={tw`h-1/2`}>
                    <Map></Map>
                </View>
                <View style={tw`h-1/2`}></View>
            </View>
        </SafeAreaView>
    )
}
export default MapScreen;

