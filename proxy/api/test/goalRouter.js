const goalRouter = require('express').Router();
const goal = require('./../../static-assets/test-goals/goals');


goalRouter.get('/one/:id', (req, res) => {
  const { id } = req.params;
  const engagedGoal = goal.getGoalById(id);
  return res.status(200).send(engagedGoal);
});

goalRouter.get('/all', (req, res) => {
  const goals = goal.getGoals();
  return res.status(200).send(goals);
});


goalRouter.post('/one', (req, res) => {
  const goalToCreate = {mWhat, mHow, mTimeFrame} = req.body;
  const createdGoal = goal.addToGoals(goalToCreate);
  return res.status(200).send([createdGoal]);
});

goalRouter.post('/one/support', (req, res) => {
  const updatedGoal = goal.addSupportToGoal(req.body);
  return res.status(200).send([updatedGoal]);
});

goalRouter.delete('/one/delete', (req, res) => {
  const { goalId } = req.body;
  const updatedGoals = goal.deleteGoal(goalId);
  return res.status(200).send(updatedGoals);
});


module.exports = goalRouter;
