const CreateCampaignModel = require("../Models/CreateCampaignModel")
const Campaign=require("../Models/CreateCampaignModel")


exports.createCampaign=async(req,res)=>{
     try{
        const{CampaignName,DeviceFormat,TrafficType,ConnectionType,AdUnit,PricingType,Landing_Url,Country,TotalBudget,Start_Time,os,Brower,Language,DayOfWeek,Time_Range,carrier}=req.body
        if(!CampaignName,!DeviceFormat,!TrafficType,!ConnectionType,!AdUnit,!PricingType,!Landing_Url,!Country,!TotalBudget,!Start_Time,!os,!Brower,!Language,!DayOfWeek,!Time_Range,!carrier){
            return res.status(400).json({
                sucess:false,
                message:"Please Gave All The Values"
            })
        }

        const CampaignData=await Campaign.create({
            CampaignName,DeviceFormat,TrafficType,ConnectionType,AdUnit,PricingType,Landing_Url,Country,TotalBudget,Start_Time,os,Brower,Language,DayOfWeek,Time_Range,carrier
        })

        return res.status(200).json({
            success:true,
            data:CampaignData,
            message:"Campaign Created SuccessFully"
        })
     } catch(error){
        return res.status(500).json({
            sucess:false,
            message:"some error occured",
            error
        })
     }
}