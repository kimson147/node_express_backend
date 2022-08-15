import mongoose from "mongoose";
import { UserModelInterface, UserType } from "../types";

const UserSchema = new mongoose.Schema({
  //   last_name: {
  //     type: String,
  //     require: true,
  //   },
  //   first_name: {
  //     type: String,
  //     require: true,
  //   },
  //   email: {
  //     type: String,
  //     require: true,
  //   },
  //   password: {
  //     type: String,
  //     require: true,
  //   },
  name: {
    type: String,
    require: true,
  },
});

UserSchema.statics.build = (attr: UserType) => {
  return new User(attr);
};

const User = mongoose.model<any, UserModelInterface>(
  "sample_airbnb.listingsAndReviews",
  UserSchema
);

export { User };
