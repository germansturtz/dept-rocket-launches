const makeApp = require("./app");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const PORT = 4000;
const mongoDB = "mongodb://127.0.0.1";

(async () => {
  const app = await makeApp();
  await mongoose.connect(mongoDB, {
    dbName: "rocket-launches",
    user: "root",
    pass: "example",
  });

  app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
})();
