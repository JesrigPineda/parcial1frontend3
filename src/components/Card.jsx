import React from "react";

const Card = (user) => {
  return (
    <div>
      <h2>Hola {user.prop.name} 👋</h2>
      <p>Sabemos que tu libro📚 favorito es:</p>
      <p>{user.prop.book}</p>
    </div>
  );
}

export default Card;