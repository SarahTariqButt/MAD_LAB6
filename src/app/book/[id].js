import { useLocalSearchParams } from "expo-router";
import { books } from "../../data/books";
import { Text, View } from "react-native";
import { Stack } from "expo-router";
export default function BookDetails() {
  const { id, from, sort } = useLocalSearchParams();
  const book = books.find((book) => book.id === id);
  if (!book) {
    return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: "Invalid ID",
          headerRight: () => (
            <Text style={{ color: "white", fontSize: 12, marginRight: 10 }}>
              BSEF24M020
            </Text>
          ),
        }}
      />
      <Text>Book Not Found</Text>
     </View>
    )
  } return (<View><Stack.Screen
    options={{
      headerTitle: book.title,
      headerRight: () => (
        <Text style={{ color: "white", fontSize: 12, marginRight: 10 }}>
          BSEF24M020
        </Text>
      ),
    }}
  />
    <Text>
      BookTitle: {book.title}
    </Text>
    <Text>
      Author: {book.author}
    </Text>
    <Text>
      Year: {book.year}
    </Text>
    <Text>
      Id:{id},
    </Text>
    <Text>
      From:{from},
    </Text>
    <Text>
      Sort:{sort}
    </Text>
  </View>

  );
}