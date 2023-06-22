import React, { useState, useEffect } from "react";

import "./CrudForm.css"

const storeProdToEdit = {
  name: "",
  type: "",
  price: "",
  imgUrl: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(storeProdToEdit);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(storeProdToEdit);
    }
  }, [dataToEdit]);

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
          type="text"
          name="name"
          placeholder="nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="type"
          placeholder="tipo"
          onChange={handleChange}
          value={form.type}
        />
        <input
          type="number"
          name="price"
          placeholder="precio"
          onChange={handleChange}
          value={form.price}
        />
        <input
          type="text"
          name="imgUrl"
          placeholder="imagenUrl"
          onChange={handleChange}
          value={form.imgUrl}
        />
        <input type="submit" value="enviar" />
        <input type="reset" value="limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
