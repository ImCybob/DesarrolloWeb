// Configuración de sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'admin', 'AWScontra',{
    dialect:'mysql', 
    host:'database-1.c5jx3swgqvae.us-east-1.rds.amazonaws.com',
    dialectOptions:{
        options:{
            // Características especiales de la conexión :)
        }
    },
    define:{
        timestamps: false,
        freezeTableName:true
    }
});
module.exports = sequelize;