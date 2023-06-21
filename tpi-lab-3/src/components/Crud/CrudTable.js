import React from 'react'
// import CrudTableRow from './CrudTableRow'
import ProductsCard from '../Products/ProductsCard'

const CrudTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div>
        <h3>tabla de datos</h3>
        <div>
            <div className='productsList'>
                {data.length === 0? <tr><td colSpan="3">sin datos</td></tr> : data.map((product) => <ProductsCard key={product.id} {...product} setDataToEdit={setDataToEdit} deleteData={deleteData} product={product}/>)}
                {/* data.map((el) => <CrudTableRow key={el.id} data={el}/>) */}
            </div>
        </div>
    </div>
  )
}

export default CrudTable