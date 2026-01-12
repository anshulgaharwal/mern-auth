const mongoose = require("mongoose");

const connectDB = async () => { //stores fnc in variable
    try{
        await mongoose.connect(process.env.MONGO_URI);//connect to mongodb with connection string
        console.log("MongoDb connected");//runs when connection succeed
    }
    catch(error){
        console.log("DB connection failed: ", error.message);
        process.exit(1);//stop the server
    }
}

module.exports = connectDB;

//mogoose: lib helps node.js talk to monog db
//mongodb: stores data as doc(json)
//does not care about structure
//mogoose: creates structre(schemas)
//manage connections, gives you methods
//translate between js and mongodb
//async: fnc contains async code helps u use await
//node will wait until conncn succeeds or fails
//try and catch: error handling
//awit pauses the process untill succeed
//if not present server will start before db reaady
