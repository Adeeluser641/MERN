// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Initialize the Express application
const app = express();
// Define the port to listen on, using the value from the .env file or defaulting to 5000
const PORT = process.env.PORT || 5000;

// Define a basic route for testing
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Retrieve the MongoDB URI from the environment variables
const mongoURI = process.env.MONGODB_URI;

// Check if the MongoDB URI is correctly loaded
if (!mongoURI) {
  console.error('MongoDB URI is not defined in the environment variables.');
  process.exit(1); // Exit the process with a failure code
}

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI,)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if the connection fails
  });

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
