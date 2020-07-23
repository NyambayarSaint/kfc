const mongoose = require('mongoose')

const USERNAME = process.env.USERNAME
const PASSWORD = process.env.PASSWORD


// ATLAS SETUP
// const connectionString = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0-9crok.mongodb.net/kfc?retryWrites=true&w=majority`;
// mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})


// LOCAL SETUP
mongoose.connect('mongodb://192.168.10.82:27017/kfc', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})


// TB MONGO SERVER SETUP
// mongoose.connect(`mongodb://${USERNAME}:${PASSWORD}@192.168.10.82:27017/kfc`, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })

console.log("MongoDB connected successfully!!!");