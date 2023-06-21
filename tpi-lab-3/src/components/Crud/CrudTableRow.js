import React from 'react'

const CrudTableRow = ({data}) => {
  return (
//     <tr>
//     <td>{data.name}</td>
//     <td>{data.price} </td>
//     <td>
//         <button>editar</button>
//         <button>eliminar</button>
//     </td>
// </tr>  
<div>
  <div>{data.name}</div>
  <img src={data.imgUrl} alt="img" width="250" height="300" />
  <div>{data.price}</div>
  <button> add to cart </button>
  <button> edit product </button>
</div>
)
};

export default CrudTableRow