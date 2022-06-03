const mongoose = require('mongoose')
require('dotenv').config({ path: '.env' })

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            maxPoolSize: 50,
            wtimeoutMS: 2500,
            useNewUrlParser: true
        })
        console.log('DB connected ')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectDB;