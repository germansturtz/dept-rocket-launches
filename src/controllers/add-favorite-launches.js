const { addFavorites } = require("../repositories/launches-repository");

const addFavoriteLaunches = (request, response) => {
  const userId = request.headers["x-user-id"] || '1';
  const launches = request.body.flight_numbers;

  addFavorites(userId, launches);

  response.status(201).send();
};

module.exports = { addFavoriteLaunches };
