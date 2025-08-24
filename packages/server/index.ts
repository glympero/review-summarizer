import express from 'express';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';
dotenv.config();

const app = express();
const port = process.env.port || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.get('/api/hello', (req: Request, res: Response) => {
  console.log('Received request at /api/hello');
  res.json({
    message: 'Hello from the API!',
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
