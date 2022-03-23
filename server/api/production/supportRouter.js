const supportRouter = require('express').Router();
const SupportBusiness = require('./../../business/support');


supportRouter.post('/post/one', (req, res) => {
  const supportToCreate = req.body;
  SupportBusiness.createOne(supportToCreate, res);
});


supportRouter.delete('/delete/one', (req, res) => {
  const supportToDelete = req.body;
  SupportBusiness.deleteOne(supportToDelete, res);
});


module.exports = supportRouter;
