import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Createdetail() {
  const [vr_no,setvrno] = useState()
  const [sr_no,setsrno] = useState()
  const [item_code,setcode] = useState()
  const [item_name,setname] = useState()
  const [description,setdes] = useState()
  const [qty,setqty ]= useState()
  const [rate,setrate]= useState()
  const [amount,setamt]= useState()

  const navigate = useNavigate()

  const validateForm = () => {
    if (!vr_no || !sr_no || !item_code || !item_name || !description || !qty || !rate || !amount) {
      alert('All fields are required.');
      return false;
    }
    return true;
  };

  const Submit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
        return;
      }
    axios.post("http://localhost:3001/detail",{vr_no, sr_no, item_code,item_name,description,qty,rate,amount})
    .then(result =>{
      console.log(result)
      navigate('/')
    }) 
    
    .catch(err => console.log(err))
  }

  
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center vw-100'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Submit}>
            <h2>Add Detail</h2>
            <div className='mb-2'>
            <label>vr_no</label>
            <input type='text'placeholder='Enter vr_no' className='form-control'
             onChange={(e) => setvrno(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>sr_no</label>
            <input type='text'placeholder='Enter sr_no' className='form-control'
             onChange={(e) => setsrno(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>item_code</label>
            <input type='text'placeholder='Enter item_code' className='form-control'
            onChange={(e) => setcode(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>item_name</label>
            <input type='text'placeholder='Enter item_name' className='form-control'
            onChange={(e) => setname(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>description</label>
            <input type='text'placeholder='Enter description' className='form-control'
            onChange={(e) => setdes(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>qty</label>
            <input type='text'placeholder='Enter qty' className='form-control'
            onChange={(e) => setqty(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>rate</label>
            <input type='text'placeholder='Enter rate' className='form-control'
            onChange={(e) => setrate(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>amount</label>
            <input type='text'placeholder='Enter amount' className='form-control'
            onChange={(e) => setamt(e.target.value)}></input>
            </div>
            <div>
                <button className='btn btn-success'>Submit</button>
            </div>
            
        </form>
      </div>
    </div>
  )
}

export default Createdetail
