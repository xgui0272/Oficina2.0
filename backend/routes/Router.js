/**
 * Bibliotecas externas
 */
const express = require('express');

/**
 * instanciando o router
 */
const router = express();

/**
 * Controller da aplicação
 */
const BudgetController = require('../controllers/BudgetController');

/**
 * middlewares da aplicação
 */
const validate = require('../middlewares/handleValidation');
const {budgetCreateValidation} = require('../middlewares/budgetValidation');

/**
 * Rotas de POST e GET
 */
router.get('/search', BudgetController.searchShowBudget);
router.post('/createbudget', budgetCreateValidation(), validate, BudgetController.insertBudget);
router.post('/update', budgetCreateValidation(), validate, BudgetController.updateBudgetPost);
router.get('/edit/:id', BudgetController.updateBudget);
router.get('/searchdate', BudgetController.searchDateShowBudget);
router.post('/remove', BudgetController.removeBudget);
router.get('/', BudgetController.showBudgets);


module.exports = router;