/**
 * import sequelize
 */
const {Op} = require('sequelize');

/**
 * Model da tabela de orçamento
 */
const Budget = require('../models/Budget');

/**
 * Classe com todos os controllers do model da tabela
 * de orçamentos
 */ 
module.exports = class BudgetController {

    /**
     *Controller para listar todos os orçamentos
     * na tela principal
     */
    static async showBudgets(req, res) {
        const id = req.params.id;

        const budget = await Budget.findAll({order: [['createdAt', 'DESC']], raw: true});


        /**
        * Formatando o preço do orçamento para
        * o padrão brasileiro
        */
        const formattedBudgets = budget.map((budget) => ({
            ...budget,
            valor: parseFloat(budget.valor).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
          }));

        res.json(formattedBudgets);
    }

    /**
     *Controller para INSERT novos orçamentos
     */
    static async insertBudget(req, res) {
        const budget = {
            cliente: req.body.cliente,
            vendedor: req.body.vendedor,
            descricao: req.body.descricao,
            valor: req.body.valor
        }

        await Budget.create(budget);

        res.redirect('/')
    }

    /**
     *  Controller para buscar dados do orçamento para pagina de edição
     */
    static async updateBudget(req, res) {
        const id = req.params.id;

        const budget = await Budget.findOne({where: {id: id}, raw: true});

        res.json(budget);
    }

    /**
     *Controller para inserir o UPDATE do orçamento
     */
    static async updateBudgetPost(req, res) {
        const id = req.body.id;

        const budget = {
            id,
            cliente: req.body.cliente,
            vendedor: req.body.vendedor,
            descricao: req.body.descricao,
            valor: req.body.valor
        }

        await Budget.update(budget, {where: {id: id}});
        res.redirect('/');
    }

    /**
     *  Controller de busca orçamento pelo nome do cliente ou vendedor
     */
    static async searchShowBudget(req, res) {
        const search = req.query.search;

        const budget = await Budget.findAll({where: {
            [Op.or]: [
              { cliente: { [Op.like]: `%${search}%` } },
              { vendedor: { [Op.like]: `%${search}%` } },
            ],
          },  order: [['createdAt', 'DESC']], raw: true,});

          /**
          * Formatando o preço do orçamento para
          * o padrão brasileiro
          */
          const formattedBudgets = budget.map((budget) => ({
            ...budget,
            valor: parseFloat(budget.valor).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
          }));

        res.json(formattedBudgets);

        console.log(search)
    }

    /**
     *  Controller de busca de orçamento por um range de datas
     */
    static async searchDateShowBudget(req, res) {
        const startDate = req.query.startDate;
        const endDate = req.query.endDate;

        const budget = await Budget.findAll({where: {createdAt :{[Op.between]: [startDate, endDate]}},order: [['createdAt', 'DESC']], raw: true});

        /**
         * Formatando o preço do orçamento para
         * o padrão brasileiro
         */
        const formattedBudgets = budget.map((budget) => ({
          ...budget,
          valor: parseFloat(budget.valor).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
        }));

      res.json(formattedBudgets);
    }

    /**
    * Controller para remover um orçamento
    */
    static async removeBudget(req, res) {
        const id = req.body.id;

        await Budget.destroy({where: {id: id}});

        res.redirect('/')
    }

}