module.exports = {
  "development": {
    "dialect": "mysql",
    "host": process.env.DB_HOST,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "port": process.env.DB_PORT
  },
  "test": {
    "dialect": "mysql",
    "host": process.env.DB_HOST,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "port": process.env.DB_PORT
  },
  "production": {
    "dialect": "mysql",
    "host": process.env.DB_HOST,
    "user": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "port": process.env.DB_PORT
  }
}
