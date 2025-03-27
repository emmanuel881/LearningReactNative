import { View, Text, StatusBar, StyleSheet, Pressable, Alert } from 'react-native'
import React, { useRef, useState } from 'react'

import BackButton from '@/components/BackButton'
import { useRouter } from 'expo-router'
import ScreenWrapper from '@/components/ScreenWrapper'
import { hp, wp } from '@/helpers/common'
import { theme } from '@/constants/theme'
import Input from '@/components/input'
import Icon from '@/assets/icons'
import Button from '@/components/Button'


const Login = () => {
    const router = useRouter()
    const [emailRef, setEmailRef] = useState("")
    const [passwordRef, setPasswordRef] = useState("")
    const [loading, setLoading] = useState(false)

    const onSubmit = async () => {
        if (!emailRef || !passwordRef) {
            Alert.alert("please fill in all the fields!")
        }
    }


    return (
        <ScreenWrapper bg="white">
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <BackButton router={router} />

                {/* welcome */}
                <View>
                    <Text style={styles.welcomeText}>Hey 👋</Text>
                    <Text style={styles.welcomeText}>Welcome back</Text>
                </View>

                {/* form */}
                <View style={styles.form}>
                    <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
                        please login to continue
                    </Text>
                    <Input
                        icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
                        placeholder='Enter your email'
                        onChangeText={(value) => setEmailRef(value)}
                    />
                    <Input
                        icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
                        placeholder='Enter your password'
                        secureTextEntry
                        onChangeText={(value) => setPasswordRef(value)}
                    />
                </View>
                <Text style={styles.forgotPassword}>
                    Forgot password?
                </Text>

                {/* button */}
                <Button title={"login"} loading={loading} onPress={onSubmit} />

                {/* footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Don't have an account?
                    </Text>
                    <Pressable onPress={() => router.push("signup")}>
                        <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semiBold }]}>Sign up</Text>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5),
    },
    welcomeText: {
        fontSize: hp(4),
        fontWeight: theme.fonts.bold,
        color: theme.colors.text
    },
    form: {
        gap: 25
    },
    forgotPassword: {
        textAlign: "right",
        fontWeight: theme.fonts.semiBold,
        color: theme.colors.text
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },
    footerText: {
        textAlign: "center",
        color: theme.colors.text,
        fontSize: hp(1.6)
    }

})
export default Login