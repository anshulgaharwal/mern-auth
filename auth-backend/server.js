const app = require("./src/app")
const connectDB = require("./src/config/db")

const PORT = process.send.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
//callback fun: runs after something finishes

//listen-start waiting for requests starts the server

//port-gate number
