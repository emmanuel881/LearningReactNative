import { Image, Text, ImageBackground, View, StatusBar } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from "@/constants/icons"
import { images } from "@/constants/images"

const TabIcons = ({ focused, icon, title }: any) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center rounded-full overflow-hidden items-center" >

                <Image source={icon} tintColor="#151312" className='size-5' />
                <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>

            </ImageBackground >
        )
    }
    return (
        <View className='size-full justify-center items-center mt-4 rounded-full'>
            <Image source={icon} tintColor="#a8b5db" className='size-5' />
        </View>
    )

}

const _layout = () => {

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#151312" />
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarItemStyle: {
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    tabBarStyle: {
                        backgroundColor: "#0f0d23",
                        borderRadius: 50,
                        marginHorizontal: 20,
                        marginBottom: 36,
                        height: 52,
                        position: 'absolute',
                        overflow: "hidden",
                        borderWidth: 1,
                        borderColor: "#0f0d23"
                    }
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        title: "Home",
                        tabBarIcon: ({ focused }) => (
                            <>
                                <TabIcons
                                    focused={focused}
                                    icon={icons.home}
                                    title="Home"
                                />
                            </>)
                    }} />
                <Tabs.Screen
                    name="search"
                    options={{
                        headerShown: false,
                        title: "Search",
                        tabBarIcon: ({ focused }) => (
                            <>
                                <TabIcons
                                    focused={focused}
                                    icon={icons.search}
                                    title="Search"
                                />
                            </>)
                    }} />
                <Tabs.Screen
                    name="saved"
                    options={{
                        headerShown: false,
                        title: "Saved",
                        tabBarIcon: ({ focused }) => (
                            <>
                                <TabIcons
                                    focused={focused}
                                    icon={icons.save}
                                    title="Saved"
                                />
                            </>)
                    }} />
                <Tabs.Screen
                    name="profile"
                    options={{
                        headerShown: false,
                        title: "Profile",
                        tabBarIcon: ({ focused }) => (
                            <>
                                <TabIcons
                                    focused={focused}
                                    icon={icons.person}
                                    title="Profile"
                                />
                            </>)
                    }} />
            </Tabs>
        </>
    )
}

export default _layout