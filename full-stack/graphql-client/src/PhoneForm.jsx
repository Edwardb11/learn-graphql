import React, { useState } from 'react'
import { EDIT_NUMBER } from './persons/graphql-mutations';
import { useMutation } from '@apollo/client';

const PhoneForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
  
    const [changeNumber] = useMutation(EDIT_NUMBER );
    const handleSubmit = (e) => {
      e.preventDefault();
      changeNumber({ variables: { name, phone } });
      setName("");
      setPhone("");

    };
    return (
      <div>
        <h2>Edit phone</h2>
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
          <button> Change Phone </button>
        </form>
      </div>
    );
}

export default PhoneForm