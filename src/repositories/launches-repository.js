const FAVORITES = [];

const addFavorites = (userId, launches = []) => {
  const userFavorites = FAVORITES.find(({ userId }) => userId == userId);

  if (!userFavorites) {
    FAVORITES.push({ userId: userId, launches: launches });
    return;
  }

  notDuplicatedLaunches = launches.filter(
    (launch) =>
      !userFavorites.launches.some((favoriteLaunch) => favoriteLaunch == launch)
  );

  [
    {
      userId: 1,
      launches: {
        12: true,
      },
    },
  ];
  launches[glight_od] = true;
  userFavorites.launches.push(notDuplicatedLaunches);
};

const getFavorites = (userId) => {
  const favorite = FAVORITES.find((x) => x.userId == userId);
  return (favorite && favorite.launches) || [];
};

module.exports = { addFavorites, getFavorites };
