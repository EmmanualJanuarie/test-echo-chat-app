const mongoose = require('mongoose');

const connDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.log(`MongoDB connection error: ${error.message}`);
        process.exit();
    }
};

module.exports=connDB