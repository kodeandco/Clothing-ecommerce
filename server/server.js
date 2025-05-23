
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './db.js';
import signupRoute from './routes/signup_route.js'; 
import loginRoute from './routes/login_route.js'; 

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/signup', signupRoute);
app.use('/login', loginRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
