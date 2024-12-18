import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';


const Project = sequelize.define(
  'projects',
  {
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  
    propertyType: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    
  }
);

export default Project;
