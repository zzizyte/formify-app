import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.TEST_VAR)

const app = express();
app.use(cors());

export default app;