import { useLazyQuery, gql } from "@apollo/client";
import React, { useState } from "react";
import { useEffect } from "react";

export const Persons = ({ persons }) => {
  const FIND_PERSON = gql`
    query {
      findPerson(name: $name) {
        id
        name
        phone
        adress {
          city
          street
        }
      }
    }
  `;
  const [getPerson, result] = useLazyQuery(FIND_PERSON);
  const [person, setPerson] = useState(null);
  const showPerson = (name) => {
    getPerson({ variables: { name: name } });
  };
  console.log({ person });
  useEffect(() => {
    if (result.data) {
      setPerson(result.data.findPerson);
    }
  }, [result]);

  if (person) {
    return (
      <div>
        <h2>{person.name}</h2>
        <div>
          {person.adress.street}, {person.adress.city}
        </div>
        <div>{person.phone}</div>
        <button onClick={() => setPerson(null)}>close</button>
      </div>
    );
  }
  if (persons === null) return null;

  return (
    <div>
      <h1>Personas</h1>
      {persons.map((p) => (
        <div
          key={p.id}
          onClick={() => {
            showPerson(p.name);
          }}>
          {p.name} {p.phone}
        </div>
      ))}
    </div>
  );
};
