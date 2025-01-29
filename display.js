import { FlatList, Image, View, Text} from "react-native";

function ImageGallery({ images}) {
    <FlatList
    data={images}
    renderItem={({ item }) => (
        <View>
            <Image source={{ uri: item.path }} style={{ width: 100, height: 100}} />
            <Text>{item.timestamp}</Text>
        </View>
    )}
    keyExtractor={(item) => item.id.toString()}
    />
}