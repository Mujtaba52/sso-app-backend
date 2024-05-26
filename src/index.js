import express from 'express';
import "dotenv/config";
import mongoose from 'mongoose';

const app = express();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})