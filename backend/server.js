import express from 'express'

dotenv.config();// Assuming products is a module exporting the data
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('I am very happy that this API is running...'); // Corrected the typo
});

app.use('/api/products',productRoutes);
app.use(notFound); 
app.use(errorHandler);
app.listen(port, () => console.log(`Server is running on port ${port}`)); // Added space after "port"
