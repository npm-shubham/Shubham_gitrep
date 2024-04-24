const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");

// models
const reviewSchema = require("./model/review");
const userSchema = require("./model/user");
const bookingSchema = require("./model/booking");
// Resolvers
const reviewRoot = require("./resolvers/reviewResolver");
const userRoot = require("./resolvers/userResolver");
const bookingRoot = require("./resolvers/bookingResolver");

const app = express();
app.use(express.json());

app.all(
  "/graphql/review",
  createHandler({
    schema: reviewSchema,
    rootValue: reviewRoot
  })
);

app.all(
  "/graphql/users",
  createHandler({
    schema: userSchema,
    rootValue: userRoot
  })
);

app.all(
  "/graphql/bookings",
  createHandler({
    schema: bookingSchema,
    rootValue: bookingRoot
  })
);

app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");
