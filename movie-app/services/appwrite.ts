//track search by users

import { Client, Databases, ID, Query } from "react-native-appwrite"

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTIONS_ID!
const client = new Client()
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_URL!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

//create a DB instance
const database = new Databases(client)

export const updateSearchCount = async (query: string, movie: Movie) => {
    //check if record of that search has already been stored
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal("searchTerm", query)
        ])

        if (result.documents.length > 0) {
            const existingMovie = result.documents[0]

            await database.updateDocument(
                DATABASE_ID,
                COLLECTION_ID,
                existingMovie.$id,
                {
                    count: existingMovie.count + 1
                }
            )
        } else {
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm: query,
                movie_id: movie.id,
                count: 1,
                title: movie.title,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            })
        }
    } catch (error) {
        console.log(error)
        throw error
    }

    //increament search count
    //if no doc found create it and increament by 1


}