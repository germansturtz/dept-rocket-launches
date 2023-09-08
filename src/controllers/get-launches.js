const { getAllLaunches } = require("../services/spacex-launches");
const { getFavorites } = require("../repositories/launches-repository");

const getLaunches = async (request, response) => {
  const userId = request.headers["x-user-id"] || '1';
  const allLaunches = await getAllLaunches();
  const favoriteLaunches = getFavorites(userId);

  launchesWithFavorites = allLaunches.map((launch) => ({
    ...launch,
    favorite: favoriteLaunches.some((x) => x == launch.flight_number),
  }));

  response.status(200).json(launchesWithFavorites);
};

module.exports = { getLaunches };
