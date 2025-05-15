import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovie } from '@/services/api'
import { updataSearchCount } from '@/services/appwrite'
import useFetch from '@/services/useFetch'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, ImageBackground, Text, View } from 'react-native'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("")

    const { data: movies, loading, error, refetch: loadMovies, reset } = useFetch(() => fetchMovie({ query: searchQuery.trim() }), false)

    useEffect(() => {

        const timeout = setTimeout(async () => {

            if (searchQuery.trim()) {
                await loadMovies()

            }
        }, 600)

        return () => clearTimeout(timeout)


    }, [searchQuery])

    useEffect(() => {
        if (movies?.length > 0 && movies?.[0]) {
            updataSearchCount(searchQuery, movies[0])
        }
    }, [movies])

    return (
        <ImageBackground source={images.mainbg} className='flex-1' resizeMode='cover'>
            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                columnWrapperStyle={{
                    justifyContent: "flex-start",
                    gap: 20,
                    paddingRight: 5,
                    marginBottom: 10
                }}
                numColumns={3}
                ListHeaderComponent={
                    <>
                        <View className='flex-row items-center'>
                            <Image source={icons.logo} className='h-24 w-24' />
                            <Text className='text-[40px] ml-10 text-textColor'>Movie</Text>
                        </View>
                        <SearchBar
                            placeholder='search for your favorite movies'
                            value={searchQuery}
                            onChangeText={(text: string) => setSearchQuery(text)}
                        />
                        {loading && (
                            <ActivityIndicator size="large" color="#483C32" className="my-3" />
                        )}
                        {error && (
                            <Text className='text-red-500 px-5 my-3'>
                                {error.message}
                            </Text>
                        )}
                        {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
                            <Text className='text-xl font-bold'>
                                Search results for
                                <Text className='text-red-600'>{searchQuery}</Text>
                            </Text>
                        )}
                    </>

                }

                ListEmptyComponent={
                    !loading && !error ? (
                        <View className='mt-10 px-5'>
                            <Text className='text-center'>{searchQuery.trim() ? "no movie found" : "search for a movie"}</Text>
                        </View>
                    ) : null
                }

            />
        </ImageBackground>
    )
}

