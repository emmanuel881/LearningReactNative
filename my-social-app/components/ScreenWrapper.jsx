import { View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ScreenWrapper = ({ children, bg }) => {
    const { top } = useSafeAreaInsets()

    //check if device has a notch and apply padding if it does
    const paddingTop = top > 0 ? top + 5 : 30

    return (
        <View style={{ flex: 1, paddingTop: paddingTop, backgroundColor: bg }}>

            {
                children
            }

        </View>
    )
}

export default ScreenWrapper