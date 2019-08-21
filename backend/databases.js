const Sequelize = require('sequelize')
const { DB_DATABASES, DB_USER, DB_PASS, DB_HOST, DB_PORT } = process.env
const sequelize = new Sequelize({
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASS,
    database: DB_DATABASES,
    dialect: 'mysql',
    define: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = {
    sequelize
}