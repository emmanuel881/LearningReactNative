import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { movieDetails } from '@/services/api'
import useFetch from '@/services/useFetch'
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router'
import { ArrowLeft } from 'phosphor-react-native'
import React, { useCallback } from 'react'
import { Image, ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'

interface MoviesInfoProps {
    label: string,
    value?: string | number | null
}

const MovieInfo = ({ label, value }: MoviesInfoProps) => (
    <View className='flex-col items-start justify-center mt-5'>
        <Text className='font-normal text-sm '>
            {label}
        </Text>
        <Text className='text-sm font-bold mt-2'>
            {value || "N/A"}
        </Text>
    </View>
)

const MovieDetails = () => {
    const { id } = useLocalSearchParams()
    const { data: movie, loading } = useFetch(() => movieDetails(id as string))


    useFocusEffect(
        useCallback(() => {
            StatusBar.setHidden(true, "fade");
            return () => StatusBar.setHidden(false, "fade"); // reset on unfocus
        }, [])
    );


    return (
        <ImageBackground source={images.mainbg} resizeMode='cover' className='flex-1'>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} className='flex-1 bg-white/75'>
                <View>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }}
                        className='w-full h-[500px] '
                        resizeMode='cover'
                    />
                </View>
                <View className='flex-col items-start justify-center mt-5 px-5'>
                    <Text className='font-bold text-xl'>
                        {movie?.title}
                    </Text>
                    <View className='flex-row items-center gap-x-1 mt-2 w-full '>
                        <Text className='text-sm'>
                            {movie?.release_date.split("-")[0]} -
                        </Text>

                        <Text className='text-sm pl-1'>
                            {movie?.runtime}mins
                        </Text>
                    </View>
                    <View className='flex-row items-center px-2 py-1 gap-x-1 mt-2 bg-slate-300 rounded-lg'>
                        <Image source={icons.star} className='size-4' />
                        <Text>{Math.round(movie?.vote_average ?? 0)}/10</Text>
                        <Text className='text-sm'>({movie?.vote_count}) votes</Text>
                    </View>
                    <MovieInfo label="Overview" value={movie?.overview} />
                    <MovieInfo label="Genres" value={movie?.genres?.map((g) => g.name).join(" - ") || "N/A"} />
                    <View className='flex flex-row justify-between w-1/2'>
                        <MovieInfo
                            label="Budget"
                            value={
                                movie?.budget
                                    ? `$${(movie.budget / 1_000_000).toFixed(1)} million`
                                    : "N/A"
                            }
                        />

                        <MovieInfo label='Revenue' value={
                            movie?.revenue ?
                                `${Math.round(movie?.revenue) / 1000000} milion`
                                : "N/A"}
                        />
                    </View>
                    <MovieInfo label='Production Companies' value={movie?.production_companies.map((c) => c.name).join(" , ") || "N/A"} />
                </View>

                <TouchableOpacity className='w-full justify-center items-center mt-5'
                    onPress={router.back}
                >
                    <View className='flex-row p-4 bg-pink-300 items-center rounded-full p-3'>
                        <ArrowLeft size={25} color='#483c32' />
                        <Text className='font-semibold text-base'>Go Back</Text>
                    </View>

                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    )
}

export default MovieDetails