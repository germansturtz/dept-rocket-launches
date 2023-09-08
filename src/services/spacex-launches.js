const axios = require("axios");

const getAllLaunches = async () => {
  [launches, rockets] = await axios.all([
    axios.get("https://api.spacexdata.com/v3/launches"),
    axios.get("https://api.spacexdata.com/v3/rockets"),
  ]);

  response = launches.data.map((launch) => {
    rocket = rockets.data.find((x) => x.rocket_id == launch.rocket.rocket_id);
    return {
      flight_number: launch.flight_number,
      mission_name: launch.mission_name,
      mission_patch: launch.links.mission_patch,
      details: launch.details,
      rocket: {
        rocket_id: rocket.rocket_id,
        rocket_name: rocket.rocket_name,
        active: rocket.active,
        cost_per_launch: rocket.cost_per_launch,
        company: rocket.company,
      },
    };
  });

  return response;
};

module.exports = { getAllLaunches };
