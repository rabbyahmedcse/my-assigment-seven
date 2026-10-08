import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.BETTER_MONGODB_URL);
const db = client.db("bazar_user");

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: {
    google: { 
        clientId: process.env.BETTER_GOOGLE_CLIENT_ID , 
        clientSecret: process.env.BETTER_GOOGLE_CLIENT_SECRET,
    },
    github: { 
      clientId: process.env.BETTER_GITHUB_CLIENT_ID, 
      clientSecret: process.env.BETTER_GITHUB_CLIENT_SECRET, 
  }, 
  },
  database: mongodbAdapter(db, {
    client,
  }),
});