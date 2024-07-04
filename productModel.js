const { DataTypes } = require('sequelize')
const sequilize=require('./database')

const productData =sequilize.define('ProductData',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        autoIncrement:true,
    primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    }

},{tableName:'productsData'}
)
module.exports=productData
