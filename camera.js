import { RNCamera } from "react-native-camera";

function CameraScreen() {
    let cameraRef

    const takePicture = async () => {
        if (cameraRef) {
            const options = { quality: 0.5, base64: true}
            const data = await cameraRef.takePictureAsync(options)
            console.log(data.uri)

            const timestamp = new Date().toISOString()
            addImage(data.uri, latitude, logitude, timestamp)
        }
    }

    return (
        <RNCamera
            ref={(ref) => { cameraRef = ref}}
            style={{ flex: 1}}
            type={RNCamera.Constants.Type.back}
            captureAudio={false}
            >
                <Button title="Take Picture" onPress={takePicture} />
        </RNCamera>
    )
}

export default CameraScreen