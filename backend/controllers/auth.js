const mysql=require('mysql');
const jwt=require("jsonwebtoken");
const bcrypt=require('bcryptjs');
const {promisify}=require('util');

const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})
exports.login=async function(req,res){
    try {
        const {email,password}=req.body;
        console.log(req.body);
        if(!email || !password)
        {
            //console.log('Enter email or password');
            res.status(401).send("Enter email or password");
            console.log("email or password empty");

            return;
        }
        db.query('select * from user_approved where user_email=?',[email],async(error,result)=>{
            //console.log(result);
            if(error)
            {
                res.status(401).send("Backend Error"); 
                console.log(error);
                return;
            }
            
            if(!result || !(await bcrypt.compare(password,result[0].user_password))){
                //console.log("email or password is not valid");
                res.status(401).send("email or password is not valid");
                console.log("email or password is not valid");
                return;
            }else{ 
                console.log(result);
                const id = result[0].user_email;
                const token=jwt.sign({id:id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN});
                console.log("token is: "+token);


                const cookieoptions={
                    expires:new Date(
                        Date.now()+process.env.JWT_COOKIE_EXPIRES*24*60*60*1000
                    ),
                    httpOnly:true
                }
                // console.log("before");
                res.cookie('jwt',token,cookieoptions);
                // console.log("After");

                res.status(200).send("User Logged In");
            }
        });
    } catch (error) {
        res.status(401).send("Error in backend");
        console.log(error);
    }
    
}
exports.register=(req,res)=>{
    //console.log(req.body);
    const {name,email,password,confirmpassword}=req.body;
    if(name=="" || email=="" || password=="")
    {
        res.status(401).send("Null Values");
        return;
    }

    db.query('SELECT user_email from user_notapproved where user_email=?',[email],async (error,result)=>{
        if(error){
            res.status(401).send("DB Failure");
            return;
        }
        if(result.length>0)
        {
            console.log("");
            res.status(401).send("User with this email already exists");
            return;
        }else if(password!==confirmpassword)
        {
            res.status(401).send("password doesnot match");
            return;
        } 
 
        let hashedpassword=await bcrypt.hash(password,8);
        //console.log(hashedpassword);
        db.query('INSERT INTO user_notapproved SET ?',{user_name:name,user_email:email,user_password:hashedpassword},(error,result)=>{
            if(error){
                // console.log(error);
            res.status(401).send("Not Hashed");
            }else{
                // console.log("registered"); 
                res.status(200).send("Registered");
            }
        })
    })
    
    //res.send("User registered");
}

exports.isLoggedIn=async (req,res,next)=>{
    //console.log(req.cookies);
    if(req.cookies.jwt)
    {
        try {
            //verify cookie
            const decoded=await promisify(jwt.verify)(req.cookies.jwt,process.env.JWT_SECRET);

            console.log(decoded);

            //verify if user still exists
            db.query('select * from user_approved where user_email=?',[decoded.id],(error,result)=>{
                console.log(result);
                if(!result){
                    return next();
                }
                req.user=result[0];
                return next();
                
            })
            
        } catch (error) {
            console.log(error);   
            return next();
        }
    }else{
        next();
    }
}
exports.loggedOut=async (req,res,next)=>{
    res.cookie('jwt','loggedout',{expires:new Date(Date.now()+2*1000),httpOnly:true});
    res.send('loggedout');
    // res.status(200).redirect('/');
}