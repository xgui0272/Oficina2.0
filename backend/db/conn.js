/**
* Import do sequelize
*/
const {Sequelize} = require('sequelize');

/**
 * Dados para conexão com o mysql
 */
const sequelize = new Sequelize('oficina', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

/**
 * Autenticando a conexão
 */

try {

    sequelize.authenticate();
    console.log('Conectado com sucesso ao banco de dados!');
    
} catch (error) {
    
    connsole.log(`Não foi possivel conectar ${error}`);
}

module.exports = sequelize;