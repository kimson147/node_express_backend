import mongoose, { ConnectOptions } from "mongoose";

console.log(process.env.MONGODB_URL);

try {
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
} catch (error) {
  console.log(error);
  process.exit(1);
}
