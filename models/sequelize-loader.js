'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/ex_study'
);

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};