import mongoose, { ConnectOptions } from "mongoose";

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  } as ConnectOptions,
  () => {
    console.log("Connect Database");
  }
);
