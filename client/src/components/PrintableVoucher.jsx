import React from 'react';

function PrintableVoucher({ headerData, detailData }) {
  return (
    <div className='printable-sales-entry'>
      <h2>Printable Sales Entry</h2>
      <table className='table'>
        <thead>
          <tr>
            <th colSpan={5}><center>Header</center></th>
          </tr>
          <tr>
            <th>vr_no</th>
            <th>vr_date</th>
            <th>ac_name</th>
            <th>ac_amt</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {headerData.map((user) => (
            <tr key={user.vr_no}>
              <td>{user.vr_no}</td>
              <td>{user.vr_date}</td>
              <td>{user.ac_name}</td>
              <td>{user.ac_amt}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

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
          </tr>
        </thead>
        <tbody>
          {detailData.map((user) => (
            <tr key={user.vr_no}>
              <td>{user.vr_no}</td>
              <td>{user.sr_no}</td>
              <td>{user.item_code}</td>
              <td>{user.item_name}</td>
              <td>{user.description}</td>
              <td>{user.qty}</td>
              <td>{user.rate}</td>
              <td>{user.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PrintableVoucher;
