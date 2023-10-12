const UserFavoritesModel = require("./models/user-favorites");

const addFavorites = async (userId, launches = []) => {
  const mappedLaunches = {};
  launches.forEach((x) => {
    mappedLaunches[x] = true;
  });

  const filter = { _user_id: userId };
  const favoriteLaunches = {
    _user_id: userId,
    favorite_launches: mappedLaunches,
  };
  const doc = await UserFavoritesModel.findOneAndUpdate(
    filter,
    favoriteLaunches,
    {
      new: true,
      upsert: true,
    }
  );

  await UserFavoritesModel.create();
};

const getFavorites = async (userId) => {
  const favorite = await UserFavoritesModel.findOne({
    _user_id: userId,
  }).exec();
  return favorite?.favorite_launches ?? {};
};

module.exports = { addFavorites, getFavorites };
