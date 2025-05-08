import { Tabs } from 'expo-router'
import { FloppyDisk, Heart, HouseLine, IconContext, MagnifyingGlass, TrendUp } from "phosphor-react-native"
import React from 'react'
import { StatusBar } from 'react-native'
import TabIcon from '../components/TabIcon'


const _layout = () => {
    return (
        <>
            <StatusBar barStyle={"dark-content"} />
            <IconContext.Provider
                value={{
                    color: "#D36B00",
                    size: 24,
                    weight: "regular"
                }}
            >
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
                            backgroundColor: "#FAF8F6",
                            borderRadius: 50,
                            marginHorizontal: 20,
                            marginBottom: 36,
                            height: 52,
                            overflow: "hidden",
                            borderWidth: 1,
                            borderColor: "pink"
                        }
                    }}

                >
                    <Tabs.Screen
                        name='index'
                        options={{
                            title: "Home",
                            headerShown: false,
                            tabBarIcon: ({ focused }) => (
                                <TabIcon Icon={HouseLine} label='Home' focused={focused} />
                            )
                        }}

                    />
                    <Tabs.Screen
                        name='upcoming'
                        options={{
                            title: "Upcoming",
                            headerShown: false,
                            tabBarIcon: ({ focused }) => <TabIcon Icon={TrendUp} label='Upcoming' focused={focused} />
                        }} />
                    <Tabs.Screen
                        name='liked'
                        options={{
                            title: "Liked",
                            headerShown: false,
                            tabBarIcon: ({ focused }) => <TabIcon Icon={Heart} label='Liked' focused={focused} />
                        }} />
                    <Tabs.Screen
                        name='saved'
                        options={{
                            title: "Saved",
                            headerShown: false,
                            tabBarIcon: ({ focused }) => <TabIcon Icon={FloppyDisk} label="Saved" focused={focused} />
                        }} />
                    <Tabs.Screen
                        name="search"
                        options={{
                            title: "search",
                            headerShown: false,
                            tabBarIcon: ({ focused }) => <TabIcon Icon={MagnifyingGlass} label='Search' focused={focused} />
                        }}
                    />
                </Tabs>
            </IconContext.Provider>

        </>)
}

export default _layout