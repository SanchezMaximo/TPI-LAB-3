import React, { useState, useEffect, useContext } from "react";
import "./CrudForm.css";
import { ThemeContext } from "../context/ThemeContext";
import { ToastContainer, toast } from "react-toastify";

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
  const [invalidFields, setInvalidFields] = useState({});
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

    if (!form.name || !form.type || !form.price || !form.imgUrl) {
      setInvalidFields({
        name: !form.name,
        type: !form.type,
        price: !form.price,
        imgUrl: !form.imgUrl,
      });
      toast.error("Data can't be empty");
      return;
    } else if (!form.name || !form.type || form.price < 0 || !form.imgUrl) {
      setInvalidFields({
        name: !form.name,
        type: !form.type,
        price: form.price < 0,
        imgUrl: !form.imgUrl,
      });
      toast.error("Price must be equal to or greater than 0");
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
    setInvalidFields(false);
    setDataToEdit(null);
  };

  return (
    <div id="form" className={`form ${isDarkMode ? "dark" : "light"}`}>
      <form onSubmit={handleSubmit}>
        {form.id !== null ? (
          <p className={isDarkMode ? "editingFormDark" : "editingFormLight"}>
            Editing:{" "}
          </p>
        ) : (
          <p className={isDarkMode ? "editingFormDark" : "editingFormLight"}>
            New Item:{" "}
          </p>
        )}
        <input
          className={invalidFields.name ? "invalid-field" : "inputName"}
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          className={invalidFields.type ? "invalid-field" : "inputType"}
          type="text"
          name="type"
          placeholder="type"
          onChange={handleChange}
          value={form.type}
        />
        <input
          className={invalidFields.price ? "invalid-field" : "inputPrice"}
          type="number"
          name="price"
          placeholder="price"
          onChange={handleChange}
          value={form.price}
        />
        <input
          className={invalidFields.imgUrl ? "invalid-field" : "inputImg"}
          type="text"
          name="imgUrl"
          placeholder="imagenUrl"
          onChange={handleChange}
          value={form.imgUrl}
        />
        <input className="inputSend" type="submit" value="Send" />
        <input
          className="inputClean"
          type="reset"
          value="Clear"
          onClick={handleReset}
        />
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default CrudForm;
