module.exports = {
    app: require("../app"),
    request: require("supertest"),
    ...require("../models/index")
}

const mongoose = require('mongoose')
beforeAll((done) => {
    process.env.NODE_ENV = 'test'
    mongoose.set('bufferCommands', false)
    mongoose.connect("mongodb://localhost:27017/app03",
        {useNewUrlParser: true, useUnifiedTopology: true})
        .then(x => {
            console.log('connected to mongoose: ' );//+ mongodbURI
            done();
        })
        .catch(error => console.log('error creating connection to: '  + error))//+ mongodbURI

    mongoose.connection.on('error', err => {
        console.log(err)
    })
})

afterAll(async () => {
    await mongoose.connection.close()
})