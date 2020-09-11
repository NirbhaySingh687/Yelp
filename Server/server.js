require('dotenv').config()
const express =require("express")
const app= express();
const db = require('./db')
const cors = require("cors")
app.use(cors())
app.use(express.json());

//Get All Resturants
app.get("/api/v1/resturants/",async (req,res)=>{
    try{
        const result= await db.query("SELECT * FROM resturants")
        console.log(`Result`,result)
        res.status(200).json({
            status: "Success",
            results: result.rows.length,
            data: {
               output : result.rows
            }
        })
    }catch (err) {
        console.log(err)
    }
})


// Create Restaurants
app.post("/api/v1/Category/", async (req,res)=>{
    try{
        const result= await db.query("INSERT INTO resturants(name,location,price) values($1,$2,$3) returning *",[
            req.body.name,req.body.location,req.body.price
        ])
        console.log(result.rows)
        res.status(200).json({
            status: "Success",
            data: {
                restaurant: result.rows
            }
        })
    }catch (err) {
        console.log(err)
    }
})


// Create Restaurants
app.post("/api/v1/SubCategory/", async (req,res)=>{
    try{
        const result= await db.query("INSERT INTO category(name,location,price) values($1,$2,$3) returning *",[
            req.body.name,req.body.location,req.body.price
        ])
        console.log(result.rows)
        res.status(200).json({
            status: "Success",
            data: {
                output: result.rows
            }
        })
    }catch (err) {
        console.log(err)
    }
})

const port=  process.env.PORT ||5000;
app.listen(port,()=>{
    console.log(`Server is up and Listening to Port ${port}`)
})