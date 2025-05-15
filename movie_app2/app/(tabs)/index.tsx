import SearchBar from "@/app/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovie } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ImageBackground, ScrollView, Text, View } from "react-native";
import MovieCard from "../components/MovieCard";
import TrendingCard from "../components/TrendingCard";

export default function Index() {
  const router = useRouter()

  const { data: trendingMovies, loading: trendingLoading, error: trendingError } = useFetch(getTrendingMovies)



  const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() => fetchMovie({
    query: ""
  }))
  return (
    <ImageBackground
      source={images.mainbg}
      resizeMode="cover"
      className="flex-1"
    >
      <ScrollView
        className="flex-1 bg-white/75"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10
        }}
      >
        <View className="flex-row items-center">
          <Image source={icons.logo} className="w-24 h-24" />
          <Text className="text-[40px] ml-10 text-textColor">Movie</Text>
        </View>

        {moviesLoading || trendingLoading ? (
          <ActivityIndicator
            size="large"
            color="#483C32"
            className="mt-10 self-center"
          />
        ) :
          moviesError || trendingError ? <Text>Error: moviesError?.message</Text> :
            <View className="flex-1 mt-5">
              <SearchBar onPress={() => router.push("/search")} placeholder="Search for a movie" />
              {trendingMovies && (
                <View className="mt-10">
                  <Text className="text-lg font-bold">Trending Movies </Text>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View className="w-4" />}
                    className="mt-3 mb-4"
                    data={trendingMovies}
                    renderItem={({ item, index }) => (
                      <TrendingCard movie={item} index={index} />
                    )}
                    keyExtractor={(item) => item.movie_id.toString()}
                  />
                </View>

              )}
              <Text className="text-lg font-bold text-textColor mt-5 mb-3 ">Movies</Text>
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

                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </View>
        }




      </ScrollView>

    </ImageBackground>
  );
}
