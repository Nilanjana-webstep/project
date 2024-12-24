import {  DataTypes }  from 'sequelize';
import sequelize from '../config/db.js';

const ProjectDetail = sequelize.define(
    'projectdetails',
    {
       projectId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      room: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      floor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      areaDetail : {
        type : DataTypes.STRING,
        allowNull: false,
      },
      unit : {
        type : DataTypes.STRING,
        allowNull: false,
      },
      cost : {
        type : DataTypes.INTEGER,
        allowNull: false,
      },
      
      
    },
    {
      freezeTableName: true,
    },
  );

  export default ProjectDetail;
  