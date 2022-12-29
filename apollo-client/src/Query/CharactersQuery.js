import { gql } from "@apollo/client";

export const CharactersQuery = gql`
  query {
    characters {
      results {
        id
        name
        status
        image
      }
    }
  }
`;
