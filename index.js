const express=require("express");
const app=express();

//import router
const CampaignRoutes=require("./Routes/CampaignRoute");


const database=require("./Database/database");
database.connect();


//middleware
const cors=require("cors");
const dotenv=require("dotenv");
dotenv.config();

PORT=process.env.PORT || 4000;


app.use(express.json());


app.use(
	cors ({
		origin:true,
		credentials:true
	})
)



app.use("/api/v1",CampaignRoutes);

app.get("/",(req,res)=>{
    return res.json({
		success:true,
		message:'Your server is up and running....'
	});
})

app.listen(PORT,()=>{
    console.log(`your port is running on this ${PORT}`)
})

