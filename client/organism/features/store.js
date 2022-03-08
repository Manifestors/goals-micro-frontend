import { configureStore } from '@reduxjs/toolkit';
import postGoalReducer from './forms/postGoalSlice';
import allGoalsReducer from './goals/allGoalsSlice';
import postGoalViewReducer from './views/postGoalView';
import engageGoalViewReducer from './views/engageGoalView';
import engagedGoalReducer from './goals/engagedGoalSlice';
import postSupportReducer from './forms/postSupportSlice';
import postSupportViewReducer from './views/postSupportView';


export default configureStore({
  reducer: {
    postGoalForm: postGoalReducer,
    allGoals: allGoalsReducer,
    postGoalView: postGoalViewReducer,
    engageGoalView: engageGoalViewReducer,
    engagedGoal: engagedGoalReducer,
    postSupportForm: postSupportReducer,
    postSupportView: postSupportViewReducer,
  },
});
