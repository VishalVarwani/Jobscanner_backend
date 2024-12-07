    const mongoose=require("mongoose")
    require('dotenv').config()
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("mongodb connected");
    })
    .catch(()=>{
        console.log('failed');
    })


    const newSchema=new mongoose.Schema({
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        recommendations: [
            {
                pdfFileName: String,
                recommendation: String,
                date: { type: Date, default: Date.now }
            }
        ],
        savedJobs: { type: Array, default: [] } // Array to store saved jobs

    })

    const collection = mongoose.model("collection",newSchema)

    module.exports=collection