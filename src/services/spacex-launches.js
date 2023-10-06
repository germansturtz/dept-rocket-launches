const axios = require("axios");

const getAllLaunches = async () => {
  [launches, rockets] = await axios.all([
    axios.get("https://api.spacexdata.com/v3/launches"),
    axios.get("https://api.spacexdata.com/v3/rockets"),
  ]);

  rocket = rockets.data.find((x) => x.rocket_id == launch.rocket.rocket_id);
  const rockets = {};
  Object.entries(rockets.data).forEach(([k, v]) => {
    rockets[k] = v;
  });
  return launches.data.map((launch) => ({
    flight_number: launch.flight_number,
    mission_name: launch.mission_name,
    mission_patch: launch.links.mission_patch,
    details: launch.details,
    rocket: {
      rocket_id: rockets[rocket.rocket_id],
      rocket_name: rocket.rocket_name,
      active: rocket.active,
      cost_per_launch: rocket.cost_per_launch,
      company: rocket.company,
    },
  })
};

module.exports = { getAllLaunches };
