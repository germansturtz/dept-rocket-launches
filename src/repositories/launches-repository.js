const FAVORITES = [];

const addFavorites = (userId, launches = []) => {
  const userFavorites = FAVORITES.find((x) => x.userId == userId);

  if (!userFavorites) {
    FAVORITES.push({ userId: userId, launches: launches });
    return;
  }

  notDuplicatedLaunches = launches.filter(
    (launch) =>
      !userFavorites.launches.some((favoriteLaunch) => favoriteLaunch == launch)
  );
  userFavorites.launches.push(notDuplicatedLaunches);
}

module.exports = { addFavorites };
