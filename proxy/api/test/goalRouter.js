const goalRouter = require('express').Router();
const testGoals = require('./../../static-assets/test-goals/goals');


goalRouter.get('/one/:id', (req, res) => {
  const { id } = req.params;

  const engagedGoal = testGoals.filter((goal, i) => {
    if (goal.id === id) {
      return goal;
    }
  });
  
  return res.status(200).send(engagedGoal[0]);
});

goalRouter.get('/all', (req, res) => {
  const allTestGoals = JSON.stringify(testGoals);
  return res.status(200).json(allTestGoals);
});


module.exports = goalRouter;
