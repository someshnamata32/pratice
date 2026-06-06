const mongoose=require('mongoose')
const dotenv=require('dotenv').config();

async function connection(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('db connected')
    }
    catch(error){
        if(error) throw error;
    }
}
module.exports=connection