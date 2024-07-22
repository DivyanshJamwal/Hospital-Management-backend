const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_CONN_STRING = process.env.MONGODB_URL;

mongoose.connect(MONGODB_CONN_STRING);
const conn = mongoose.connection;
conn.on('error',(error)=>{
    console.log('Connection failed...');
});
conn.once('open', () => {
    console.log('Database connected...');   
});