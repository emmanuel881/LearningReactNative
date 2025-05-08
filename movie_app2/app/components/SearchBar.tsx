import { MagnifyingGlass } from "phosphor-react-native";
import React from 'react';
import { TextInput, View } from 'react-native';

interface Props {
    placeholder: string,
    onPress?: () => void
}

const SearchBar = ({ placeholder, onPress }: Props) => {
    return (
        <View className='flex-row items-center rounded-full px-5 py-4'>
            <MagnifyingGlass size={23} color='#483C32' />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value=""
                onChangeText={() => { }}
                placeholderTextColor="gray"
                className="ml-2 text-white"
            />
        </View>
    )
}

export default SearchBar