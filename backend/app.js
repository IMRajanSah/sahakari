const express=require('express');
const mysql=require('mysql');
var cookieParser=require("cookie-parser");
const dotenv=require('dotenv');
const cors =require("cors");
const bodyParser=require("body-parser")

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());


dotenv.config({path:'./.env'});
const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})
db.connect((error)=>{
    if(error){
        console.log("DB Connection Failed\n"+error)
    }else{
        console.log("DB Connection Successful")
    }
})
app.use('/',require('./routes/pages'));

app.use('/auth',require('./routes/auth'));


app.listen(5000,()=>{
    console.log("server at 5000");
});