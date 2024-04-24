const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Review {
    _id: ID!
    userId: String!
    rating: Int!
    review: String!
    hotelId: String!
  }

  input ReviewInput {
    userId: String!
    rating: Int!
    review: String!
    hotelId: String!
  }

  type Query {
    getReview(id: ID!): Review
    getAllReviews: [Review]
  }

  type Mutation {
    createReview(input: ReviewInput!): Review
    updateReview(id: ID!, input: ReviewInput!): Review
    deleteReview(id: ID!): ID
  }
`);

module.exports = schema;
