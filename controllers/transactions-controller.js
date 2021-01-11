const Transaction = require('../models/transactions-model')

exports.getTransactions = async (req, res, next) => {
    try {
      const transactions = await Transaction.find();
  
      return res.status(200).json({
        success: true,
        count: transactions.length,
        data: transactions
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: 'Something went wrong.'
      });
    }
  }
  

exports.addTransaction = async (req, res, next) => {
    res.send('POST transaction')
}

exports.deleteTransaction = async (req, res, next) => {
    res.send('DELETE transactions')
}