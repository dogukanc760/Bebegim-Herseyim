
const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema(
    {
       user:{type:String, required:true},
       name:{type:String, required:true},
       companyName:{type:String, required:true},
       sector:{type:Array, required:true},
       category:{type:Array},
       city:{type:Array},
       distinct:{type:Array},
       questions:{type:Array},
       answer:{type:Array},
       title:{type:String, required:true},
       description:{type:String, required:true},
       img:{type:String, required:true},
       rating:{type:Number, default:0},
       ratingCount:{type:Number, default:0},
       comments:{type:Array},
       about:{type:String, required:true},
       isActive:{type:Boolean, default:true},
       showHome:{type:Boolean, default:true}
    },{timestamps:true});

module.exports = mongoose.model("Service", ServiceSchema);