import MapView, { Marker } from "react-native-maps";

function MapScreen({ images }) {
    return(
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        >
            {images.map((image) =>(
                <Marker
                key={image.id}
                coordinate={{
                    latitude: image.latitude,
                    longitude: image.longitude,
                }}
                title={image.timestamp}
                description={`Latitude: ${image.latitude}, Longitude: ${image.longitude}`}
                />
                ))}
        </MapView>
    )
}

export default MapScreen