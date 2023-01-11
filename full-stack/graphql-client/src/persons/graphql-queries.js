import { gql } from "@apollo/client";

export const PERSONS_DETAILS_FRAGMENT = gql`
  fragment PersonDetails on Person {
    id
    name
    phone
    adress {
      city
      street
    }
  }
`;

export const ALL_PERSONS = gql`
  query {
    allPersons {
      ...PersonDetails
    }
  }
  ${PERSONS_DETAILS_FRAGMENT}
`;
