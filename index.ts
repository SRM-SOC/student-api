import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Student API v1.0', status: 'running' });
});

app.listen(3000, () => console.log('Server running on port 3000'));