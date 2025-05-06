import { images } from "@/constants/images"
import { IconProps } from "phosphor-react-native"
import React from "react"
import { ImageBackground, Text, View } from "react-native"

type TabIconProps = {
    label: string
    Icon: React.FC<IconProps>
    focused: boolean
}

const TabIcon: React.FC<TabIconProps> = ({ label, Icon, focused }) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
                imageStyle={{ borderRadius: 999 }}
            >
                <Icon />
                <Text className="text-base text-secondary font-semibold ml-2">
                    {label}
                </Text>
            </ImageBackground>
        )
    }

    return (
        <View className="size-full justify-center items-center mt-4 rounded-full">
            <Icon />
        </View>
    )
}

export default TabIcon
