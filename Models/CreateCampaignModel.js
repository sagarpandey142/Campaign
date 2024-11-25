const mongoose=require("mongoose");

const Campaign=new mongoose.Schema({
        CampaignName:{
            type:String,
            required:true,
        },

        DeviceFormat:{
            type:String,
        },

        TrafficType:{
               type:String,
            
        },
        ConnectionType:{
            type:String,
            required:true
        },
        AdUnit:{
            type:String
        },
        PricingType:{
            type:String
        },
        Landing_Url:{
            type:String
        },
        Country:{
            type:String
        },
        TotalBudget:{
            type:String
        },
        Start_Time:{
            type:String
        },

        // optionals

        os:{
            type:String
        },
        Brower:{
            type:String,
        },
        Language:{
            type:String
        },
        DayOfWeek:{
            type:String
        },
        Time_Range:{
            type:String
        },
        carrier:{
            type:String
        }
})

module.exports=mongoose.model("Campaign",Campaign);