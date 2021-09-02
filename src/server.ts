import "dotenv/config"
import "module-alias/register";
import App from "@src/app";
import validateEnv from "@utils/validateEnv";
import { logger } from "@utils/logger";
import apolloServer from "@src/apollo_server";
import packageJson from '@/package.json'

(async () => {
  validateEnv();

  await App.initMongoose();
  const app = App.initApp();

  // graphql
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });

  app.listen(process.env.PORT || 3000, () => {
    logger.info(`Server running at port ${process.env.PORT || 3000} - API version: ${packageJson.version}`);
  });
})();
