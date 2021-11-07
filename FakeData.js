const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "pedro",
        age: 20,
        nationality: "BRAZIL",
      },
      {
        id: 4,
        name: "Kelly",
        username: "kelly2019",
        age: 5,
        nationality: "CHILE",
      },
    ],
  },
  {
    id: 2,
    name: "Pedro",
    username: "pedro",
    age: 20,
    nationality: "BRAZIL",
  },
  {
    id: 3,
    name: "Sarah",
    username: "sarah",
    age: 25,
    nationality: "UNITED_STATES",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "pedro",
        age: 20,
        nationality: "BRAZIL",
      },
    ],
  },
  {
    id: 4,
    name: "Kelly",
    username: "kelly2019",
    age: 5,
    nationality: "CHILE",
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    year: 2019,
    premiered: true,
  },
  {
    id: 2,
    name: "Interstellar",
    year: 2007,
    premiered: true,
  },
  {
    id: 3,
    name: "Superbad",
    year: 2009,
    premiered: true,
  },
  {
    id: 4,
    name: "PedroTech the Movie",
    year: 2035,
    premiered: false,
  },
];

module.exports = { UserList, MovieList };
