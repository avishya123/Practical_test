const mongoose = require('mongoose')

const headerschema = new mongoose.Schema({
    vr_no: String,
    vr_date: String,
    ac_name: String,
    ac_amt: Number,
    status: String,
})
const headermodel = mongoose.model('header',headerschema)
module.exports = headermodel;