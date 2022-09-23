//Dependecies

const Sequelize = require("sequelize");
const sequelizeConnection = require("../config/sequelizeConnections");


const Comment = sequelizeConnection.define(
  "comment",
  {
    id: {
      // This is keeping track of all the posts.
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    post_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: "Post",
        key: "id",
      },
    },
  },
  {
    sequelize: sequelizeConnection,
    timestamps: true,
    freezeTableName: true,
    modelName: "comments",
    underscored: true,
  }
);

module.exports = Comment;
