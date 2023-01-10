import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PERSON = gql`
  mutation createPerson(
    $name: String!
    $street: String!
    $city: String!
    $phone: String
  ) {
    addPerson(name: $name, phone: $phone, street: $street, city: $city) {
      name
      phone
      adress {
        city
        street
      }
      id
    }
  }
`;

export const PersonForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const [createPerson] = useMutation(CREATE_PERSON);
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
        <button > Add Save</button>
      </form>
    </div>
  );
};
