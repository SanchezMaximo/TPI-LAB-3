import React, {useState} from 'react';
import storeProducts from "../data/products.json";
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const CrudApp = () => {
  const [db, setDb] = useState(storeProducts);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map(product => product.id === data.id?data:product);
    setDb(newData);
  };

  const deleteData = (id) => {};
  
  return (
    <div>
        <h2>crud</h2>
        <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
        <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
    </div>
  )
}

export default CrudApp