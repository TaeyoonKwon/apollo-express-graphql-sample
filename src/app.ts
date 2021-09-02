import 'dotenv/config'
import express from "express";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

import { logger, stream } from "@utils/logger";
import indexRoutes from "@routes/index";
import "@models/index";


const initMiddlewares = (app: express.Application): void => {
  app.use(morgan("combined", { stream }));
  app.use(cors());
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

export default {
  initApp(): express.Application {
    const app = express();

    // middlewares
    initMiddlewares(app);

    // routes
    app.use(indexRoutes);

    return app;
  },

  async initMongoose(): Promise<void> {
    const mongoCluster: string = process.env.MONGO_CLUSTER || "";
    const mongoUser: string = process.env.MONGO_USER || "";
    const mongoPassword: string = process.env.MONGO_PASSWORD || "";
    const mongoDbname: string = process.env.MONGO_DBNAME || "test";

    try {
      const mongoUri = mongoCluster.replace("<username>", mongoUser).replace("<password>", mongoPassword).replace("<dbname>", mongoDbname);
      await mongoose.connect(
        mongoUri
      );
      logger.info(`DB Connected : ${mongoUri}`);
    } catch (e) {
      logger.error(e);
    }
  },
};
