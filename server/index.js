import express, {Router} from 'express';
import mongoose from 'mongoose';
import route from './route/routes.js';
import cors from 'cors';
import bodyparser from 'body-parser';

const app = express();

app.use(bodyparser.json({extended : true}));
app.use(bodyparser.urlencoded({extended:true}));

app.use(cors());


app.use('/customers',route);
const PORT = 8000;
const URL = 'mongodb://customer:customer12345@cluster0-shard-00-00.g5knc.mongodb.net:27017,cluster0-shard-00-01.g5knc.mongodb.net:27017,cluster0-shard-00-02.g5knc.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-e1m2s6-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(URL, {useNewUrlParser:true,useUnifiedTopology:true, useFindAndModify:false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running successfully on port ${PORT}`);
    });
}).catch(error=>{
    console.log('Error:', error.message); 
})




