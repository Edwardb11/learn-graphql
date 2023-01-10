import "./App.css";
import { Persons } from "./Persons";
import { PersonForm } from "./PersonForm";
import { usePersons } from "./persons/use-persons";
import { useState } from "react";
import { Notify } from "./Notify";

function App() {
  const { data, loading, error } = usePersons()
  const [errorM,setErrorM] = useState(null)
  const notifyError = message =>{
    setErrorM(message)
    setTimeout(()=>setErrorM(null),5000)
  }
  if (error) return <span style="color:red">{Error}</span>;
  return (
    <>
    
    <Notify errorMessage={errorM}/>
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
    <PersonForm notifyError={notifyError}/>
      </>
  );
}

export default App;
