const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Days extends Model{}
Days.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type:DataTypes.STRING,
            allowNull:false
        },
        post_task: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: false,
            vailidate: {
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'days'
    },
)