import express from 'express';
import "dotenv/config";
import mongoose from 'mongoose';
import orgRouter from './routes/organization.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/organization', orgRouter);

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})