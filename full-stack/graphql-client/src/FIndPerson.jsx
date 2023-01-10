import React from 'react'
import { gql,useLazyQuery } from "@apollo/client";

export const FIndPerson = () => {

  const FIND_PERSON = gql`
  query {
    findPerson(name:$nameToSearch) {
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
const [] = useLazyQuery(FIND_PERSON)
  return (
    <div>FIndPerson</div>
  )
}
