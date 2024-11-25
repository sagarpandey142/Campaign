const express=require("express");
const router=express.Router();

const {createCampaign}=require("../Controllers/CreateCamaign")

router.post("/createCampaign",createCampaign)

module.exports=router