const express = require('express');
const router = express.Router();

const { getTransactions, addTransactions, deletTransactions } = require('../controllers/transactions')

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions)

router
.route('/:id')
.delete(deletTransactions)
    


module.exports = router;