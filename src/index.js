import express from 'express';
import "dotenv/config";
import mongoose from 'mongoose';
import cors from "cors";
import orgRouter from './routes/organization.js';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRouter);
app.use('/organization', orgRouter);
app.use('/user', userRouter);

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true})
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})