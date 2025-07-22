import React from 'react'

export default function About(props) {
  return (
    <div className='container my-3'>
        <table className="table">
  <thead style={{background: props.mode==='dark'?'#7fa87d':'pink', color: props.mode==='dark'?'#ffbf00':'black'}}>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody style={{color: props.mode==='dark'?'white':'black'}}>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
