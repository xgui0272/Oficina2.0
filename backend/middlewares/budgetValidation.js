/**
* Import do express validator
*/
const {body} = require('express-validator');


/**
 * Função com todas as respostas de possiveis erros
 */
const budgetCreateValidation = () => {
    return [
        body('cliente')
        .isString()
        .withMessage('O nome do cliente contem numero')
        .isLength({min: 3})
        .withMessage('O nome do cliente precisa ter no mínimo 3 caracteres'),

        body('vendedor')
        .isString()
        .withMessage('O nome do vendedor é obrigatório')
        .isLength({min: 3})
        .withMessage('O nome do vendedor precisa ter no mínimo 3 caracteres'),

        body('descricao')
        .isString()
        .withMessage('A descrição é obrigatório')
        .isLength({min: 10})
        .withMessage('A descrição precisa ter no mínimo 10 caracteres'),

        body('valor')
        .isFloat()
        .withMessage('O valor é obrigatório')
        .isLength({min: 1})
        .withMessage('Preço invalido')
    ]
}

module.exports = {
    budgetCreateValidation,
}