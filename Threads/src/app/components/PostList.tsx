import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Post } from '@/types'
import Feather from '@expo/vector-icons/Feather'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const PostList = ({ post }: { post: Post }) => {
    return (
        <View className="flex-row items-start px-4 py-3 border-b border-gray-800">
            <Image
                source={{ uri: post.user.image }}
                className="w-12 h-12 rounded-full mr-3"
            />
            <View className="flex-1">
                <View className="flex-row items-center mb-1">
                    <Text className="text-white font-bold mr-2">{post.user.name}</Text>
                    <Text className="text-gray-400 text-xs">@{post.user.username}</Text>
                    <Text className="text-gray-500 text-xs ml-2">
                        {dayjs(post.createdAt).fromNow()}
                    </Text>
                </View>
                <Text className="text-white mb-2">{post.content}</Text>
                <View className="flex-row mt-2 gap-4">
                    <TouchableOpacity className="flex-row items-center">
                        <Feather name="message-circle" size={18} color="#a3a3a3" />
                        <Text className="text-gray-400 text-xs ml-1">{post.replies?.length ?? 0}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center">
                        <Feather name="heart" size={18} color="#a3a3a3" />
                        <Text className="text-gray-400 text-xs ml-1">Like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center">
                        <Feather name="repeat" size={18} color="#a3a3a3" />
                        <Text className="text-gray-400 text-xs ml-1">Repost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center">
                        <Feather name="share-2" size={18} color="#a3a3a3" />
                        <Text className="text-gray-400 text-xs ml-1">Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PostList