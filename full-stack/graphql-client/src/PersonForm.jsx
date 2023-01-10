import {  useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_PERSON } from "./persons/graphql-mutations";
import { ALL_PERSONS } from "./persons/graphql-queries";
import { GraphQLError } from "graphql";

export const PersonForm = ({notifyError}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const [createPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
    // Refresh de esa query en contreto
    onError:(error)=>{
 
        notifyError(error.graphQLErrors[0].message)
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    createPerson({ variables: { name, phone, street, city } });
    setCity("");
    setName("");
    setPhone("");
    setStreet("");
  };
  return (
    <div>
      <h2>Create a new Person</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          type="text"
          onChange={(evt) => setName(evt.target.value)}
        />
        <input
          placeholder="Phone"
          value={phone}
          type="text"
          onChange={(evt) => setPhone(evt.target.value)}
        />
        <input
          placeholder="City"
          value={city}
          type="text"
          onChange={(evt) => setCity(evt.target.value)}
        />
        <input
          placeholder="Street"
          value={street}
          type="text"
          onChange={(evt) => setStreet(evt.target.value)}
        />
        <button> Add Save</button>
      </form>
    </div>
  );
};
