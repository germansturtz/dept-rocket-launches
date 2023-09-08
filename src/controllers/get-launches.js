const { getAllLaunches } = require("../services/spacex-launches");

const getLaunches = async (_, response) => {
  const allLaunches = await getAllLaunches();

  response.status(200).json(allLaunches);
};

module.exports = { getLaunches };
