import { gql,useQuery } from '@apollo/client';
import './App.css'
import { Persons } from './Persons';

function App() {

  const ALL_PERSONS = gql`
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
// const resulst = useQuery(ALL_PERSONS)
const {data,loading,error} = useQuery(ALL_PERSONS)
if (error) return <span style='color:red'>{Error}</span>
  return (
    <div className="App">

      {loading ? <h1>Loading...</h1>:(
        <>
      <h1>React + Graphql</h1>
      <Persons persons={data?.allPersons}/>
        </>
      )}
      </div>
  )
}

export default App
