import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";
import { User } from "../models/UserModel";

export class AuthRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "AuthRoutes");
  }

  configureRoutes(): express.Application {
    this.app
      .route("/user")
      .get(async (req: express.Request, res: express.Response) => {
        console.log(req.params);

        const { name } = req.params;
        const user = await User.find({ name: name });
        res.status(200).send(user);
      })
      .post((req: express.Request, res: express.Response) => {
        const { last_name, first_name, email, password } = req.body;
        const user = User.build({ last_name, first_name, email, password });
        res.status(200).send(user);
      });
    return this.app;
  }
}
