const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserFavoritesSchema = new Schema({
  _user_id: String,
  favorite_launches: Object,
});

const UserFavoritesModel = mongoose.model(
  "UserFavoritesModel",
  UserFavoritesSchema
);

module.exports = UserFavoritesModel;
