import Geolocation from "react-native-geolocation-service";

const [location, setLocation] = useState(null)

useEffect(() => {
    Geolocation.getCurrentPosition(
        (position) => {
            setLocation(position.coords)
        },
        (error) => {
            console.log(error)
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
    )

}, [])

export default location

const latitude = location?.latitude
const longitude = location?.longitude