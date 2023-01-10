const { gql, ApolloServer } = require("apollo-server");
const { default: axios } = require("axios");
const uuidv4 = require("uuid");

const persons = [
  {
    name: "Adward",
    street: "La Vega",
    city: "La Vega",
    phone: "294829829",
    id: "jhahahh-1bnsbsb-bsbsb0011-11sbs",
  },
  {
    name: "Idward",
    street: "La Vega",
    city: "La Vega",
    phone: "294829829",
    id: "kdkdj-1bnsbsb-bsbsb0011-11sbs",
  },
  {
    name: "Edward",
    street: "La Vega",
    city: "La Vega",
    phone: "294829829",
    id: "ahhaha-1bnsbsb-bsbsb0011-11sbs",
  },
  {
    name: "Ahah",
    street: "La Vega",
    city: "La Vega",
    phone: "294829829",
    id: "ahahahh-aaaaaa-asbsb0011-11sbs",
  },
];

const typeDefs = gql`
  enum YesNo {
    YES
    NO
  }
  type Adress {
    city: String!
    street: String!
  }
  type Person {
    name: String!
    phone: String
    adress: Adress!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons(phone: YesNo): [Person]!
    findPerson(name: String!): Person
  }

  type Mutation {
    addPerson(
      name: String!
      phone: String
      city: String!
      street: String!
    ): Person
    editNumber(name: String!, phone: String!): Person
  }
`;

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: async (root, args) => {
      // const { data: personFromRestApi } = await axios.get(
      //   "http://localhost:3000/persons"
      // );
      // console.log(personFromRestApi);
      if (!args.phone) return persons;
      const byPhone = (person) =>
        args.phone === "YES" ? person.phone : !person.phone;
      // return personFromRestApi.filter(byPhone);
      return persons.filter(byPhone);
    },
    findPerson: (root, args) => {
      const { name } = args;
      return (
        persons.find((person) => person.name === name) || { name: "No found" }
      );
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
      if (persons.find((p) => p.name === args.name)) {
        throw new Error("Name must be unique", {
          invalidArgs: args.name,
        });
      }
      const person = { ...args, id: uuidv4.v4() };
      persons.push(person);
      return person;
    },
    editNumber: (root, args) => {
      const personIndex = persons.findIndex((p) => p.name === args.name);
      if (!personIndex - 1) return null;
      const person = persons[personIndex];
      const updatePerson = { ...person, phone: args.phone };
      persons[personIndex] = updatePerson;

      return updatePerson;
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
