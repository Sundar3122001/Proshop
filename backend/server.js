import express from 'express'
import products from './data/products.js' 
dotenv.config();// Assuming products is a module exporting the data
import dotenv from 'dotenv'

import connectDB from './config/db.js';
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('I am very happy that this API is running...'); // Corrected the typo
});

app.get('/api/products', (req, res) => {
    res.json(products);
});
app.get('/api/products/:id', (req, res) => {
    const product= products.find((p)=>p._id===req.params.id);
    res.json(product);
});

app.listen(port, () => console.log(`Server is running on port ${port}`)); // Added space after "port"
