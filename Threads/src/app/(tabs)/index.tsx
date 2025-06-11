import { Text, View, FlatList } from 'react-native';
import { dummyPosts } from '@/dummyData';
import PostList from '../components/PostList';

export default function HomeScreen() {
  return (
    <FlatList
      data={dummyPosts}
      renderItem={({ item }) => <PostList post={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}


