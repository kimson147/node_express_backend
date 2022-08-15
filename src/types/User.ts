import mongoose from "mongoose";

export type UserType = {
  last_name: string;
  first_name: string;
  email: string;
  password: string;
};

export interface UserDoc extends mongoose.Document {
  last_name: string;
  first_name: string;
  email: string;
  password: string;
}

export interface UserModelInterface extends mongoose.Model<UserDoc> {
  build(attr: UserType): UserDoc;
}
