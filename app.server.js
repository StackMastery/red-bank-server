import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectToDatabase } from './db/dbConnect.js';
import { AuthRoutes } from './routes/auth.routes.js';

// Load environment variables
dotenv.config();

// App Configs 
const app = express();
const port = process.env.PORT || 3000;

// CORS Middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', AuthRoutes);

// Connect to Database 
connectToDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on ${port}`);
        });
    });
