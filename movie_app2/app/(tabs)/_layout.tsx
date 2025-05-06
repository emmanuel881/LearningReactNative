import { Tabs } from 'expo-router'
import { FloppyDisk, Heart, HouseLine, IconContext, TrendUp } from "phosphor-react-native"
import React from 'react'
import TabIcon from '../components/TabIcon'


const _layout = () => {
    return (
        <IconContext.Provider
            value={{
                color: "#D36B00",
                size: 25,
                weight: "regular"
            }}
        >
            <Tabs screenOptions={{ tabBarShowLabel: false }}>
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
            </Tabs>
        </IconContext.Provider>

    )
}

export default _layout