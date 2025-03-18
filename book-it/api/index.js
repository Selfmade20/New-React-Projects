import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
const app = express()
dotenv.config()

const connect = async ()=> {

    try {
        await mongoose.connect(process.env.MONGO);
        console.log('connected to MongoDB')
      } catch (error) {
        throw error;
      }
}

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB is disconnected!')
})

mongoose.connection.on('connected', () => {
    console.log('mongoDB is connected!')
})


app.listen(5500, () => {
    connect()
    console.log('Connected to backend!')
})