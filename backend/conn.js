
const express=require("express");
const app=express();


// var mysql=require("mysql");

const db=require("./models");

const { Candidate }=require("./models")

//manage/Manipulate data
//creating routes
app.get("/select",(req,res)=>{
    res.send("select");
});

app.get("/insert",(req,res)=>{
    // res.send("insert")
    Candidate.create({
        cand_id:1,
        cand_name:"Ashley",
        cand_surname:"Monamo"

    }).catch(err=>{
        if (err) {
           console.log(err);
        }
    });
    res.send("insert");
});

app.get("/delete",(req,res)=>{
    res.send("delete")
});



db.sequelize.sync().then((req)=>{
    app.listen(3001,()=>{
        console.log("Server is Running");
    });
});



// var conn=mysql.createConnection({
// host:"localhost",
// user:"root",
// password:"Ashley@15",
// database:"FakeDatabase"
// });

// conn.connect(function(err){
//     if (err) 
//         throw err;
//        console.log("Connection successful...");
      
//     // }else{
//     //     console.log("Connection was unsuccessful...");  
//     // }
// });