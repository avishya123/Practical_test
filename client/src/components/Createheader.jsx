import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Createheader() {
  const [vr_no,setvrno] = useState()
  const [vr_date,setvrdate] = useState()
  const [ac_name,setacname] = useState()
  const [ac_amt,setamt] = useState()
  const [status,setstatus ]= useState()

  const navigate = useNavigate()


  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/header",{ vr_no,vr_date, ac_name,ac_amt,status})
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
            <h2>Add Header</h2>
            <div className='mb-2'>
            <label>vr_no</label>
            <input type='text'placeholder='Enter vr_no' className='form-control'
             onChange={(e) => setvrno(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>vr_date</label>
            <input type='date'placeholder='Enter vr_date' className='form-control'
            onChange={(e) => setvrdate(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>ac_name</label>
            <input type='text'placeholder='Enter ac_name' className='form-control'
            onChange={(e) => setacname(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>ac_amt</label>
            <input type='text'placeholder='Enter ac_amt' className='form-control'
            onChange={(e) => setamt(e.target.value)}></input>
            </div>
            <div className='mb-2'>
            <label>status</label>
            <input type='text'placeholder='Enter status' className='form-control'
            onChange={(e) => setstatus(e.target.value)}></input>
            </div>
            <div>
                <button className='btn btn-success'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Createheader
