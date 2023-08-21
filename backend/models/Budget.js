/**
 * Import da biblioteca sequelize responsavel pelos models
 */
const {DataTypes} = require('sequelize');

/**
 * Conexão com o banco de dados
 */
const db = require('../db/conn');

/**
 * Model da tabela de orçamentos
 */
const Budget = db.define('Budget', {
    cliente: {
        type: DataTypes.STRING,
        required: true
    },
    vendedor: {
        type: DataTypes.STRING,
        required: true
    },
    descricao: {
        type: DataTypes.STRING,
        required: true
    },
    valor: {
        type: DataTypes.DECIMAL(10, 2),
        required: true
    }
})

module.exports = Budget;