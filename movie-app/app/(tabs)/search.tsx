import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants/images'
import MovieCard from '@/components/MovieCard'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'
import { updateSearchCount } from '@/services/appwrite'

const Search = () => {

    const [searchQuery, setSearchQuery] = useState("")


    const { data: movies, loading, error, refetch: loadMovies, reset } = useFetch(() => fetchMovies({
        query: searchQuery
    }), false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            (async () => {
                if (searchQuery.trim()) {
                    await loadMovies()

                    if (movies?.length > 0 && movies?.[0]) {
                        await updateSearchCount(searchQuery, movies[0])
                    }
                } else {
                    reset()
                }
            })()
        }, 500);

        return () => clearTimeout(timeoutId)
    }, [searchQuery])
    // console.log(movies)

    return (
        <View className='flex-1 bg-primary'>
            <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover' />
            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item, index) => item?.id?.toString?.() || index.toString()}

                className='px-5'
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: "center",
                    gap: 16,
                    marginVertical: 16
                }}
                contentContainerStyle={{ paddingBottom: 100 }}

                ListEmptyComponent={
                    !loading && !error ? (
                        <View className='mt-10 px-5'>
                            <Text className='text-center text-gray-500'>
                                {searchQuery.trim() ? "no movies found" : "search for a movie"}
                            </Text>
                        </View>
                    ) : null
                }


                ListHeaderComponent={
                    <>
                        <View className='w-full flex-row  justify-center mt-20 items-center'>
                            <Image source={icons.logo} className='w-12 h-10' />
                        </View>
                        <View className='my-5 '>
                            <SearchBar
                                placeholder='Search movies ...'
                                value={searchQuery}
                                onChangeText={(text: string) => setSearchQuery(text)}
                            />
                        </View>

                        {loading && (
                            <ActivityIndicator size="large" color="#0000ff" />
                        )}
                        {error && (
                            <Text className='text-red-500 px-5 my-3'>
                                Error: {error.message}
                            </Text>
                        )}
                        {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
                            <Text className='text-white text-xl font-bold'>
                                search results for {" "}
                                <Text className='text-accent'>{searchQuery}</Text>
                            </Text>
                        )}
                    </>
                }
            />
        </View>
    )
}

export default Search