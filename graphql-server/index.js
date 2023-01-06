const { gql, ApolloServer } = require("apollo-server");
const { uuidv4 } = require("uuid");
const persons = [
  {
    id: "jhahahh-1bnsbsb-bsbsb0011-11sbs",
    name: "Edward",
    street: "La Vega",
    city: "La Vega",
    phone: "294829829",
  },
  {
    id: "kdkdj-1bnsbsb-bsbsb0011-11sbs",
    name: "Edward",
    street: "La Vega",
    city: "La Vega",
    phone: "294829829",
  },
  {
    id: "ahhaha-1bnsbsb-bsbsb0011-11sbs",
    name: "Edward",
    street: "La Vega",
    city: "La Vega",
    phone: "294829829",
  },
  {
    id: "ahahahh-aaaaaa-asbsb0011-11sbs",
    name: "Edward",
    street: "La Vega",
    city: "La Vega",
    phone: "294829829",
  },
];

const typeDefs = gql`
  type Adress {
    street: String!
    city: String!
  }
  type Person {
    name: String!
    phone: String
    adress: Adress!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person]!
    findPerson(name: String!): Person
  }

  type Mutation {
    addPerson(
      name: String!
      phone: String
      city: String!
      street: String!
    ): Person
  }
`;

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
    findPerson: (root, args) => {
      const { name } = args;
      return persons.find((person) => person.name === name);
    },
  },
  Person: {
    adress: (root) => {
      return {
        street: root.street,
        city: root.city,
      };
    },
  },
  Mutation: {
    addPerson: (root, args) => {
      const person = { ...args, id: uuidv4 };
      persons.push(person);
      return person;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server running ${url}`);
});
