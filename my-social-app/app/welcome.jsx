import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from "@/components/ScreenWrapper"
import { hp, wp } from "@/helpers/common"
import { theme } from '@/constants/theme'
import Button from "@/components/Button"

const Welcome = () => {
    return (
        <ScreenWrapper bg="white">
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <Image style={styles.welcomeImage} resizeMode='contain' source={require("@/assets/images/welcome.png")} />

                {/* title */}
                <View>
                    <Text style={styles.title}>LinkUp!</Text>
                    <Text style={styles.punchline}>Where every thought finds a home and every image tells a story.</Text>
                </View>

                {/* footer */}
                <View style={styles.footer}>
                    <Button title="Getting Started" />
                </View>
            </View>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        paddingHorizontal: wp(4)
    },
    welcomeImage: {
        height: hp(30),
        width: wp(100),
        alignSelf: "center"
    },
    title: {
        color: theme.colors.text,
        fontSize: hp(4),
        textAlign: "center",
        fontWeight: theme.fonts.extraBold
    },
    punchline: {
        textAlign: 'center',
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.text
    },
    footer: {
        gap: 30,
        width: "100%"
    }
})

export default Welcome
