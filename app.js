import express from 'express';
import env from 'dotenv';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

env.config();

app.listen(
  () => {
    console.log('Server is listening on port 5000');
  },
  error => {
    console.log(error);
  }
);
