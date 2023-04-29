const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    programsCount: Int
    programs: [Program]
  }

  type Program {
    name: String
    description: String
    image: String
    phasesCount: Int
    phases: [Phase]
  }

  type Phase {
    name: String
    description: String
    position: Int
    numberOfWeeks: Int
    workoutsCount: Int
    workouts: [Workout]
  }

  type Workout {
    name: String
    description: String
    position: Int
    secBtwnExs: Int
    exercisesCount: Int
    exercises: [Exercise]
  }

  type Exercise {
    name: String
    description: String
    position: Int
    goalReps: Int
    goalWeight: Int
    goalUnits: String
    numSets: Int
    secBtwnSets: Int
    exercisesCount: Int
    exDatasCount: Int
    exDatas: [ExData]
  }

  type ExData {
    setNum: Int
    reps: Int
    weight: Int
    units: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
