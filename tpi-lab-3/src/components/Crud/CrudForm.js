import React, { useState, useEffect, useContext } from "react";

import "./CrudForm.css";
import { ThemeContext } from "../context/ThemeContext";

const storeProdToEdit = {
  name: "",
  type: "",
  price: "",
  imgUrl: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(storeProdToEdit);
  const { isDarkMode } = useContext(ThemeContext);
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
    <div id="form" className={`form ${isDarkMode ? "dark" : "light"}`}>
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
