import { CommonRoutesConfig } from "../../common/common.routes.config";
import express from "express";

export class AuthRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "AuthRoutes");
  }

  configureRoutes(): express.Application {
    this.app
      .route("/auth/login")
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send("Success");
      });
    return this.app;
  }
}
