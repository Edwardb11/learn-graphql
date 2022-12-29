import { useQuery } from "@apollo/client";
import React from "react";
import { CharactersQuery } from "./Query/CharactersQuery";

const App = () => {
  const { loading, error, data } = useQuery(CharactersQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <>
    <h1 style={{ display:"flex",justifyContent:'center'}}>Rick and Morty API GRAphQL</h1>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.characters.results.map(({ id, name, status, image }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img width="400" height="250" alt={name} src={image} />
          <br />
          <b>About this location:</b>
          <p>{status}</p>
          <br />
        </div>
      ))}
    </div>
      </>
  );
};

export default App;
