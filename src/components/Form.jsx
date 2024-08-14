import React from "react";
import Card from "./Card";
import { useState } from "react";

const Form = () => {

  const [user, setUser] = useState({
    name: "",
    book: "",
  });

  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false)
  const [info, setInfo] = useState("")

  const handleName = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleBook = (e) => {
    setUser({ ...user, book: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validaciones
    if (user.name.trim().length < 3 || user.name.trim() !== user.name) {
        
        setError(true);
        setInfo("El nombre debe tener al menos 3 caracteres y no debe contener espacios en blanco al principio o al final");
        return;
    }
    
    if (user.book.trim().length < 6) {

        setError(true);
        setInfo("El libro debe tener al menos 6 caracteres");
        return;
    }

    setError(false);
    setFlag(true);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" name="name" onChange={handleName} />
            </label>
            <label>
                Libro favorito:
                <input type="text" name="book" onChange={handleBook}/>
            </label>
            <button type="submit">Enviar</button>
        </form>   
        {error ? <p style={{ color: 'red' }}>{info}</p> : null}
        {flag ? <Card prop={user} /> : null}
    </div>
  );
}

export default Form;