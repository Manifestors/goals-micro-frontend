import { configureStore } from '@reduxjs/toolkit';
import postGoalReducer from './forms/postGoalSlice';
import allGoalsReducer from './goals/allGoalsSlice';
import postGoalViewReducer from './views/postGoalView';


export default configureStore({
  reducer: {
    postGoalForm: postGoalReducer,
    allGoals: allGoalsReducer,
    postGoalView: postGoalViewReducer
  },
});
