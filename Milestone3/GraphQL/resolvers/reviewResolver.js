const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb+srv://shubhambiswas487:shubham487@psywellbeing.i4rtcgo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let reviewsCollection;

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("hotelSankey");
    reviewsCollection = database.collection("reviews");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
connectToMongo();

const root = {
  getReview: async ({ id }) => {
    try {
      const review = await reviewsCollection.findOne({ _id: new ObjectId(id) });
      return review;
    } catch (error) {
      console.error("Error fetching review:", error);
      throw error;
    }
  },
  getAllReviews: async () => {
    try {
      const reviews = await reviewsCollection.find().toArray();
      return reviews;
    } catch (error) {
      console.error("Error fetching all reviews:", error);
      throw error;
    }
  },
  createReview: async ({ input }) => {
    try {
      const result = await reviewsCollection.insertOne(input);
      if (result && result.insertedId) {
        const insertedReview = await reviewsCollection.findOne({ _id: result.insertedId });
        return insertedReview;
      } else {
        throw new Error("Failed to create review or result is undefined.");
      }
    } catch (error) {
      console.error("Error creating review:", error);
      throw error;
    }
  },
  updateReview: async ({ id, input }) => {
    try {
      const result = await reviewsCollection.updateOne({ _id: new ObjectId(id) }, { $set: input });
      if (result.matchedCount > 0) {
        return { _id: id, ...input };
      } else {
        throw new Error("Review not found");
      }
    } catch (error) {
      console.error("Error updating review:", error);
      throw error;
    }
  },
  deleteReview: async ({ id }) => {
    try {
      const result = await reviewsCollection.deleteOne({ _id: new ObjectId(id) });
      if (result.deletedCount > 0) {
        return id;
      } else {
        throw new Error("Review not found");
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      throw error;
    }
  }
};

module.exports = root;
