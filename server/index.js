const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const headermodel = require('./model/Header')
const detailmodel = require('./model/Detail')


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/salesEntryDB', { useNewUrlParser: true, useUnifiedTopology: true });


app.post('/header',(req,res)=>{
    const { vr_no,vr_date, ac_name,ac_amt,status} = req.body;
    headermodel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}),
app.get("/getheader", (req,res) =>{
    headermodel.find({})
    .then(users => res.json(users) )
    .catch(err => res.json(err))
}),
app.post('/detail',(req,res)=>{
    const { vr_no,sr_no, item_code,item_name,description,qty,rate,amount} = req.body;
    detailmodel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
app.get("/getdetail", (req,res) =>{
    detailmodel.find({})
    .then(users => res.json(users) )
    .catch(err => res.json(err))
}),
app.delete('/deletedetail/:id',(req,res)=>{
    const id=req.params.id;
    detailmodel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
  })

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
