'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Word = loader.database.define(
  'words',
  {
   wordId: {
     type: Sequelize.UUID,
     primaryKey: true,
     allowNull: false
   },
   wordQ: {
     type: Sequelize.STRING,
     allowNull: false
   },
   wordA: {
     type: Sequelize.STRING,
     allowNull: false
   },
   wordDescription: {
     type: Sequelize.TEXT,
     allowNull: false
   },
   updatedAt: {
     type: Sequelize.DATE,
     allowNull: false
   }
 },
 {
   freezeTableName: true,
   timestamps: false
 }
);

module.exports = Word;