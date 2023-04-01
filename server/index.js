import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import routes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1', routes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from server' });
});

app.listen(8080, () => console.log('Server running on port 8080 🚀'));
