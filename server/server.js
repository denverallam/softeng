import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import contentRoute from './routes/content.js';
import responseRoute from './routes/response.js';
import dotenv from 'dotenv';
import path from 'path';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/api/content', contentRoute);
app.use('/api/response', responseRoute);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.get('/', (req,res) => {
    res.send('Hello!');
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URI, {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`Running on port ${PORT}`)}))
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);


