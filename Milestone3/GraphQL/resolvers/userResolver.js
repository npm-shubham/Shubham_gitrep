const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb+srv://shubhambiswas487:shubham487@psywellbeing.i4rtcgo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let usersCollection;

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("hotelSankey");
    usersCollection = database.collection("users");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
connectToMongo();

const root = {
  getUser: async ({ id }) => {
    try {
      const user = await usersCollection.findOne({ _id: new ObjectId(id) });
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  },
  getAllUsers: async () => {
    try {
      const users = await usersCollection.find().toArray();
      return users;
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw error;
    }
  },
  createUser: async ({ input }) => {
    try {
      const result = await usersCollection.insertOne(input);
      if (result && result.insertedId) {
        const insertedUser = await usersCollection.findOne({ _id: result.insertedId });
        return insertedUser;
      } else {
        throw new Error("Failed to create user or result is undefined.");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
  updateUser: async ({ id, input }) => {
    try {
      const result = await usersCollection.updateOne({ _id: new ObjectId(id) }, { $set: input });
      if (result.matchedCount > 0) {
        return { _id: id, ...input };
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  },
  deleteUser: async ({ id }) => {
    try {
      const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });
      if (result.deletedCount > 0) {
        return id;
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
};

module.exports = root;
