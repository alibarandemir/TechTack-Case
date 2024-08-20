const mongoose = require('mongoose');
const authRoutes = require('./routes/AuthRoute.js');
const postRoutes= require('./routes/PostRoute.js')
const express= require('express');
const cors= require("cors")

const app = express();
const database=require('./config/database.js')
app.use(cors())

app.use(express.json());
database()
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


