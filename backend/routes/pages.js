const express= require('express')
const mysql=require('mysql');

const authcontroller=require('../controllers/auth')

const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})
const router = express.Router();
router.get('/checklog',authcontroller.isLoggedIn,(req,res)=>{
    //console.log(req.user)
    if(req.user)
    {
        res.status(200).send("<h2>profile page</h2>")
    }
    else{
        res.status(401).send("not accessable");
    }
})

router.get('/getmember',(req,res)=>{

    
        db.query('select * from members',async(error,result)=>{
            if(error){
                console.log(error);
                return;
            }
            res.send(result);
        });
    


})


module.exports=router