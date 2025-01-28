import SQLite from "react-native-sqlite-storage"

const db = SQLite.openDatabase(
    { name: "images.db", location: "default"},
    () => console.log("Database opened"),
    (error) => console.log("Database error:", error)
)

const createTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS images (id INTEGER PRIMARY KEY AUTOINCREMENT, path TEXT, latitude REAL, longitude REAL, timestamp TEXT)`
        )
    })
}

const addImage = (path, latitude, longitude, timestamp) => {
    db.transaction((tx) => {
        tx.executeSql(
            `INSERT INTO images (path, latitude, longitude, timestamp) VALUES (?, ?, ?, ?, ?)`
            [path, latitude, longitude, timestamp]
        )
    })
}

const getImages = (callback) => {
    db.transaction((tx) => {
        tx.executeSql(`SELECT * FROM images`, [], (_, { rows }) => {
            callback(rows._array)
        })
    })
}

createTable()