import React, { useState, useEffect } from "react";

import "./CrudForm.css";

const storeProdToEdit = {
  name: "",
  type: "",
  price: "",
  imgUrl: "",
  id: null,
};

const CrudForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
  updatedProducts,
}) => {
  const [form, setForm] = useState(storeProdToEdit);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(storeProdToEdit);
    }
  }, [dataToEdit]);

  const generateUniqueId = () => {
    let newId = 1; // Valor inicial para el nuevo ID
    const usedIds = updatedProducts.map((product) => product.id); // Obtener un array de los IDs utilizados actualmente

    while (usedIds.includes(newId)) {
      // Mientras el nuevo ID esté en uso, incrementarlo y comprobar nuevamente
      newId++;
    }

    return newId;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.type || !form.price) {
      alert("datos incompletos");
      return;
    }

    if (form.id === null) {
      const newId = generateUniqueId();
      // Actualizar el objeto 'form' con el nuevo ID
      setForm({
        ...form,
        id: newId,
      });
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(storeProdToEdit);
    setDataToEdit(null);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="inputName"
          type="text"
          name="name"
          placeholder="nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          className="inputType"
          type="text"
          name="type"
          placeholder="tipo"
          onChange={handleChange}
          value={form.type}
        />
        <input
          className="inputPrice"
          type="number"
          name="price"
          placeholder="precio"
          onChange={handleChange}
          value={form.price}
        />
        <input
          className="inputImg"
          type="text"
          name="imgUrl"
          placeholder="imagenUrl"
          onChange={handleChange}
          value={form.imgUrl}
        />
        <input className="inputSend" type="submit" value="enviar" />
        <input
          className="inputClean"
          type="reset"
          value="limpiar"
          onClick={handleReset}
        />
      </form>
    </div>
  );
};

export default CrudForm;
