import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { upcomingMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import React from 'react'
import { ActivityIndicator, FlatList, Image, ImageBackground, ScrollView, Text, View } from 'react-native'
import MovieCard from '../components/MovieCard'

export default function Upcoming() {
    const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() => upcomingMovies())
    return (
        <ImageBackground
            source={images.mainbg}
            resizeMode='cover'
            className='flex-1'
        >
            <ScrollView
                className='flex-1 bg-white/75'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    minHeight: "100%",
                    padding: 10
                }}
            >
                <View className='flex-row items-center'>
                    <Image source={icons.logo} className='w-24 h-24' />
                    <Text className='text-[40px] ml-10 text-textColor'>Movie</Text>
                </View>

                {moviesLoading ? (
                    <ActivityIndicator
                        size="large"
                        color="#483C32"
                        className='mt-10 self-center'
                    />
                ) : moviesError ? (
                    <Text>Error: {moviesError?.message}</Text>
                ) : (
                    <View>
                        <Text className='text-xl font-bold text-textColor mt-5 mb-3' >Upcoming movies</Text>
                        <FlatList
                            data={movies}
                            renderItem={({ item }) => (
                                <MovieCard {...item} />
                            )}

                            keyExtractor={(item) => item.id.toString()}

                            numColumns={3}
                            columnWrapperStyle={{
                                justifyContent: "flex-start",
                                gap: 20,
                                paddingRight: 5,
                                marginBottom: 10
                            }}

                            scrollEnabled={false}
                            className='mt-2 pb-32'
                            ListEmptyComponent={
                                <Text>No upcoming movies </Text>
                            }
                        />
                    </View>
                )}

            </ScrollView>
        </ImageBackground>
    )

}

