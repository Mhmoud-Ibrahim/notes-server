import mongoose from "mongoose"

function databaseConnection() {

try {
    mongoose.connect("mongodb://127.0.0.1:27017/note")
    console.log('connected successfully');
} catch (error) {
    res.json({message:"err:",error})
    console.log(error);
}
}

export default databaseConnection
