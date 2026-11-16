import { FlatList, Text, Pressable,View } from "react-native";
import { useRouter, Link } from "expo-router";
import { books } from "../../data/books";

export default function App() {
  const router = useRouter();

  return (
    <View>
      <Link href="/about">About</Link>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              router.push({
                pathname: "/book/[id]",
                params: { id: item.id,from:"books",sort:"title" },
              });
            }}
          >
            <Text>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
