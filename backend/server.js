require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/videos', require('./routes/videoRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));
app.use('/api/xsr', require('./routes/xsrPingRoutes'));

app.listen(5000, () => console.log('Server running on port 5000'));
