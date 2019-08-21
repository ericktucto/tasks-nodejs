const Sequelize = require('sequelize')
const { sequelize } = require('./../databases')
const Model = Sequelize.Model

class Task extends Model {}

Task.init({
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'tasks'
})

module.exports = Task