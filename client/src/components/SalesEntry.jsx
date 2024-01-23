import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PrintableVoucher from './PrintableVoucher'

function SalesEntry() {
    const[header, setheader] = useState([])
    const[detail, setdetail] = useState([])
    const [totalAmount, setTotalAmount] = useState(0);
    const [showPrintable, setShowPrintable] = useState(false);

    useEffect(()=>{
axios.get("http://localhost:3001/getheader")
.then(result => setheader(result.data))
.catch(err => console.log(err))
    },[])
    useEffect(()=>{
      axios.get("http://localhost:3001/getdetail")
      .then(result => setdetail(result.data))
      .catch(err => console.log(err))
          },[])

    const handleDelete= (id) => {
      axios.delete('http://localhost:3001/deletedetail/'+id)
     .then(res =>{ console.log(res)
    window.location.reload()
    })
    }
    const addamt =()=>{
      const calculatedTotalAmount = detail.reduce((acc, user) => acc + user.amount, 0);
      console.log("Total Amount:", calculatedTotalAmount);
  
      setTotalAmount(calculatedTotalAmount);
    }

    const handlePrint = () => {
      setShowPrintable(true);
      window.print();
    };
  return (
    <div className='d-block vh-100 bg-primary justify-content-center align-items-center vw-100 ' >
      <br />
      <div className='w-80 bg-white rounded p-3 font-size-25' >
<table className='table'>
    <thead>
        <tr>
        <th colSpan={5} style={{backgroundColor:'yellow'}}><center>Header</center></th>
        </tr>
        <tr>
       <th>vr_no</th>
       <th>vr_date</th>
       <th>ac_name</th>
       <th>ac_amt</th>
       <th>status</th>
       </tr>
    </thead>
<tbody>{
    header.map((user)=>{
return <tr>              
    <td>{user.vr_no}</td>
    <td>{user.vr_date}</td>
    <td>{user.ac_name}</td>
    <td>{user.ac_amt}</td>
    <td>{user.status}</td>
</tr>
    })
    }
    
</tbody>
</table>
      </div>
      <br />
      <div className='w-80 bg-white rounded p-3 font-size-25' s>
<table className='table'>
    <thead>
        <tr>
        <th colSpan={8}><center>Detail</center></th>
        </tr>
        <tr>
       <th>vr_no</th>
       <th>sr_no</th>
       <th>item_code</th>
       <th>item_name</th>
       <th>description</th>
       <th>qty</th>
       <th>rate</th>
       <th>amount</th>
       <th className='action'>Action</th>
       </tr>
    </thead>
<tbody>{
    detail.map((user)=>{
return <tr> 
    <td>{user.vr_no}</td>
    <td>{user.sr_no}</td>
    <td>{user.item_code}</td>
    <td>{user.item_name}</td>
    <td>{user.description}</td>
    <td>{user.qty}</td>
    <td>{user.rate}</td>
    <td>{user.amount}</td>
     <td><button className='btn btn-danger p-3' onClick={(e) => handleDelete(user._id)}>Delete</button></td>
</tr>
 
    })
    }
    
</tbody>
<div >
<button onClick={addamt} >Totel<input type="text" value={totalAmount} style={{width:'70px'}}/></button>
</div>
</table>

<br />
<div style={{paddingBottom:'10px'}}>
<span><Link to={'/createdetail'}><button className='btn btn-success p-3' >Add</button></Link></span>
</div>
<button onClick={handlePrint} className='btn btn-secondary'>
          Print Sales Entry
        </button>
      </div>
      {showPrintable && (
        <PrintableSalesEntry headerData={header} detailData={detail} />
      )}
    </div>
  )
}

export default SalesEntry