const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Booking {
    id: ID!
    userid: String!
    hotelid: String!
    checkindate: String!
    checkoutdate: String!
    billingamount: Float!
  }

  input BookingInput {
    userid: String!
    hotelid: String!
    checkindate: String!
    checkoutdate: String!
    billingamount: Float!
  }

  type Query {
    getBooking(id: ID!): Booking
    getAllBookings: [Booking]
  }

  type Mutation {
    createBooking(input: BookingInput!): Booking
    updateBooking(id: ID!, input: BookingInput!): Booking
    deleteBooking(id: ID!): ID
  }
`);

module.exports = schema;
