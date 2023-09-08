const express = require("express");
const { json } = require("express");

const launchesRoutes = require("./routes/launches-routes");

module.exports = async () => {
  const app = express();

  app.use(json());

  app.get("/", (_, response) => {
    response.status(200).json({ message: "Rocket Launches API" });
  });

  app.use("/launches", launchesRoutes);

  return app;
};
