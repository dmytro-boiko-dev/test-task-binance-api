import express from 'express';
import cors from 'cors';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import priceRoutes from './routes/priceRoute';
import {fetchAndStorePrice} from './controllers/priceController';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/prices', priceRoutes);

setInterval(fetchAndStorePrice, 60000);
fetchAndStorePrice(); // Initial fetch

// db connection
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/priceTracker';

// mongoose.connect(MONGO_URI)
//     .then(() => {
//         console.log('Connected to MongoDB');
//
//         // Start fetching prices periodically (every 60 seconds)
//         setInterval(fetchAndStorePrice, 60000);
//         fetchAndStorePrice(); // Initial fetch
//     })
//     .catch((err: Error) => console.error('MongoDB connection error:', err.message));

export default app;