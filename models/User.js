//Dependecies

const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/sequelizeConnections');
const sequilizeConnection = require('../config/sequelizeConnections');
const bcrypt = require('bcrypt');

const User = sequelizeConnection.define('user', {

    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false

    },
    username:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            len:[5, 10],

        }
    },

    password:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            len:[5,10]
        }
    }

}, {
    sequelize: sequelizeConnection,
    timestamps: false,
    freezeTableName: true,
    modelName: 'users',
    underscored: true
});


// Hooks
User.beforeCreate( async user => {
 user.password = await bcrypt.hash(user.password, 10); // This is protecting the passwords create it with the hashing method.
}) 


//This example below shows what would happen when creating new credentials

// const newUser = {
//   username: " Joe Smith",
//   password: "password34",
// }

// User.create(newUser);

module.exports = User;
