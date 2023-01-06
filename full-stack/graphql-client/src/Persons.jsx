import React from "react";

export const Persons = ({ persons }) => {
  if (persons === null) return null;

  return (
    <div>
      <h1>Personas</h1>
      {persons.map((p) => (
        <div key={p.id}>
          {p.name} {p.phone}
        </div>
      ))}
    </div>
  );
};
