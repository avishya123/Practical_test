const mongoose = require('mongoose')

const detailschema = new mongoose.Schema({
    vr_no:String,
    sr_no: String,
    item_code: String,
    item_name: String,
    description: String,
    qty: Number,
    rate: Number,
    amount:Number,
    ac_amt:Number
})
const detailmodel = mongoose.model('detail',detailschema)
module.exports = detailmodel;