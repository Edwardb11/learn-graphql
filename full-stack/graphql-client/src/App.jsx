import { gql, useQuery } from "@apollo/client";
import "./App.css";
import { Persons } from "./Persons";
import { PersonForm } from "./PersonForm";

export const ALL_PERSONS = gql`
   query {
     allPersons {
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
function App() {
  // const resulst = useQuery(ALL_PERSONS) 
  // pollInterval cada 2000 segundo vera si hay cambios ya ctualizara ,{pollInterval:2000}
  const { data, loading, error } = useQuery(ALL_PERSONS);
  if (error) return <span style="color:red">{Error}</span>;
  return (
    <>
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
        ) : (
          <>
          <h1>React + Graphql</h1>
          <Persons persons={data?.allPersons} />
        </>
      )}
    </div>
    <PersonForm/>
      </>
  );
}

export default App;
