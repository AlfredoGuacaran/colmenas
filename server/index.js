import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cosechasRoutes from './routes/cosechas.js';

/// sustituir XXXXXXXMONGODB_KEYXXXXXX por la key de la base de datos
const uri = 'mongodb+srv://alfredoguacaran:XXXXXXXMONGODB_KEYXXXXXX@cluster0.1ayw3.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/', cosechasRoutes);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error));
