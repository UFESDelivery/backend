require('dotenv').config();

module.exports = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "root",
  PASSWORD: process.env.DB_PASSWORD || "12345678",
  DB: process.env.DB_NAME || "test",
  dialect: process.env.DB_DIALECT || "mysql",
  pool: {
    max: parseInt(process.env.DB_POOL_MAX) || 5, // maximum number of connection in pool
    min: parseInt(process.env.DB_POOL_MIN) || 0, // minimum number of connection in pool
    acquire: parseInt(process.env.DB_POOL_ACQUIRE) || 30000, // maximum time, in milliseconds, that a connection can be idle before being released
    idle: parseInt(process.env.DB_POOL_IDLE) || 10000 // maximum time, in milliseconds, that pool will try to get connection before throwing error
  },
  logging: process.env.DB_LOGGING === 'true' ? true : false,
};