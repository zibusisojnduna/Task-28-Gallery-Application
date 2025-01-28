import { launchImageLibrary } from "react-native-image-picker";

function pickImage() {
    launchImageLibrary({ mediaType: "photo", quality: 1}, (response) => {
        if (!response.didCancel && !response.error) {
            console.log(response.assets[0].uri)

            const timestamp = new Date().toISOString()
            addImage(response.assets[0].uri, latitude, longitude, timestamp)
        }
    })
}

export default pickImage

return (
    <Button title="Pick Image" onPress={pickImage}/>
)