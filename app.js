const express=require('express');
const dotenv=require('dotenv').config();
const cors=require('cors')
let connection=require('./config/db')
const limiter=require('./middlewares/ratelimit')
let productroutes=require('./routes/productroutes')
let authroutes=require('./routes/authroutes')
const app=express();
const port=process.env.PORT;

//middleware
app.use(express.json())
app.use(cors())
app.use(limiter)

app.use('/products',productroutes)
app.use('/auth',authroutes)


app.listen(port,()=>{
  console.log(`the server is running on ${port} `)
  connection();
  
})