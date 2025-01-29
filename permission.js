import { PermissionsAndroid } from "react-native";

const requestPermission = async () => {
    try {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ])
        if (granted["android.permission.CAMERA"] === "granted") {
            console.log("Camera permission granted")
        }
    } catch (err) {
        console.warn(err)
    }
}

export default requestPermission;