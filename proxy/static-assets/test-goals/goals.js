class Goal {
  constructor() {
    this.goals = {};
    this.nextId = 1;
    this.nextSupportId = 1;
    this.size = 0;
  }

  getGoals() {
    const currentGoals = this.goals;
    const allGoals = [];
    for (let i = 1; i < this.size + 1; i++) {
      allGoals.push(currentGoals[i]);
    }
    return allGoals;
  }
  
  getGoalById(id) {
    return this.goals[id]
  }

  addToGoals({ mWhat, mHow, mTimeFrame }) {
    const createdGoal = {id: this.getNextId(), mWhat, mHow, mTimeFrame, sMsgs: []};
    this.goals[this.getNextId()] = createdGoal;
    this.increaseNextId();
    this.increaseSize();
    return this.getGoalById(createdGoal.id);
  }

  addSupportToGoal({belongsTo, sMsg}) {
    const goalToSupport = this.getGoalById(belongsTo);
    const createdSupportMsg = {id: this.getNextSupportId(), belongsTo, sMsg};
    goalToSupport.sMsgs.push(createdSupportMsg);
    this.increaseNextSupportId();
    this.goals[belongsTo] = goalToSupport;
    return this.getGoalById(belongsTo);
  }

  getSize() {
    return this.size;
  }
  
  increaseSize() {
    this.size++;
    return this.size;
  }

  getNextId() {
    return this.nextId;
  }

  increaseNextId() {
    this.nextId++;
    return this.nextId;
  }

  getNextSupportId() {
    return this.nextSupportId;
  }

  increaseNextSupportId() {
    this.nextSupportId++;
    return this.nextSupportId;
  }

  instantiateTestData() {
    this.goals = {
      1: {
        id: 1,
        userName: 'Marlon Esparza',
        mWhat: 'Create an application based on goal manifestation.',
        mHow: 'Come up with a longterm goal, then make daily plans/commits.',
        mTimeFrame: 'Yearly',
        sMsgs: []
      },
      2: {
        id: 2,
        userName: 'Abraham Esparza',
        mWhat: 'Study the Winnie back-end codebase in order to deeply understand it.',
        mHow: 'Set aside a few hours every weekend to dive into their Github.',
        mTimeFrame: 'Weekly',
        sMsgs: []
      },
      3: {
        id: 3,
        userName: 'Silvia Vega',
        mWhat: 'Save $1,000 fast, then move on to the debt snowball.',
        mHow: 'Put away $30 each day- which is equal to 2 hours.',
        mTimeFrame: 'Daily',
        sMsgs: []
      }
    };
    this.increaseSize();
    this.increaseSize();
    this.increaseSize();
    this.increaseNextId();
    this.increaseNextId();
    this.increaseNextId();
  }
};

const goal = new Goal();
goal.instantiateTestData();


module.exports = goal;
