const { gql } = require("apollo-server");

const persons = [
  {
    id: "jhahahh-1bnsbsb-bsbsb0011-11sbs",
    name: "Edward",
    street: "La Vega",
    citi: "La Vega",
    phone: "294829829",
  },
  {
    id: "kdkdj-1bnsbsb-bsbsb0011-11sbs",
    name: "Edward",
    street: "La Vega",
    citi: "La Vega",
    phone: "294829829",
  },
  {
    id: "ahhaha-1bnsbsb-bsbsb0011-11sbs",
    name: "Edward",
    street: "La Vega",
    citi: "La Vega",
    phone: "294829829",
  },
  {
    id: "ahahahh-aaaaaa-asbsb0011-11sbs",
    name: "Edward",
    street: "La Vega",
    citi: "La Vega",
    phone: "294829829",
  },
];

const typeDefs = gql`
  type Person {
    name: String!
    phone: String
    street: String!
    city: String!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person]!
  }
`;

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
  },
};

