/**
 * Import Express Validator
 */
const {validationResult} = require('express-validator');

/**
 * Validação das requisição
*/
const validate = (req, res, next) => {
    /**
     * Pegando possiveis erros da requisição
     */
    const errors = validationResult(req);

   /**
     * Se não tiver erros continue
     */
    if(errors.isEmpty()) {
        return next();
    }

    /**
     * Array de erros
     */
    const extractedErros = [];

    /**
     * Inserindo erros no array
     */
    errors.array().map((err) => extractedErros.push(err.msg));

    /**
     * Res status code junto com o array de erros
     */
    return res.status(422).json({
        errors
    })
}

module.exports = validate;