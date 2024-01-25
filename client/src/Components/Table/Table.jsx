import React, { useContext } from 'react'
import dataContext from '../../Context/Context'

const Table = () => {
    const {data, setData, handleDelete} = useContext(dataContext)
  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
   {
    
    data.map((item, index)=>(
        <tr key={item._id}>
        <td><img src={item?.image} alt="" style={{"width":"18rem"}} /></td>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td><button onClick={()=>handleDelete(item._id)}>Delete</button>
        </td>
      </tr>
    ))
   }
  </tbody>
</table>
    </div>
  )
}

export default Table