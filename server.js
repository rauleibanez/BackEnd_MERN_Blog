require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/config');
const postRoutes = require('./src/routes/postRoutes');
const userRoutes = require('./src/routes/userRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api', postRoutes);
app.use('/api', userRoutes);

//endpoint por defecto
app.get('/', (req, res) => { 
  res.end('Bievenido al servidor Back-End! Blog MERN-STACK!...')
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
