// dependencies
import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import { connectDB } from './config/connectDB.js';

// all routes
import todoRoutes from './routes/todo.routes.js'

// Create an express application
const app = express()
// CORS means Cross-Origin Resource Sharing. 
// It is a security feature implemented in browsers that prevents a webpage from making AJAX requests to another domain.
// We need to enable CORS in our Express server to allow the frontend to make requests to the backend.
// Enable CORS for all requests, you can also enable it for specific routes
app.use(cors());
// for parsing application/json, extended: true allows for nested objects in the JSON request body to be parsed as well 
app.use(bodyParser.json({ extended: true })); 
// for parsing application/x-www-form-urlencoded, extended: true allows for nested objects in the form data to be parsed as well
app.use(bodyParser.urlencoded({ extended: true }))

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 8000
const DATABASE_URL = process.env.DATABASE_URL || ''

// Define the routes
app.use('/api/v1', todoRoutes)

// start the server and connect to the MongoDB atlas database
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectDB()
});