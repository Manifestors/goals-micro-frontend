import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setGoals } from './features/goals/allGoalsSlice';
import MainTheme from './themes/main';
import SectionApp from './molecules/atoms/SectionApp';
import FilterSelect from './molecules/FilterSelect';
import GoalContainerAll from './molecules/GoalContainerAll';
import GoalContainerEngage from './molecules/GoalContainerEngage';
import PostGoalForm from './molecules/PostGoalForm';
import PostGoalBtn from './molecules/PostGoalBtn';
import fetchAllGoals from '../utils/production/fetchAllGoals';


const App = () => {
  const postGoalView = useSelector((state) => state.postGoalView.view);
  const engageGoalView = useSelector((state) => state.engageGoalView.view);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllGoals(dispatch, setGoals);
  }, []);

  return (
    <MainTheme>
      <SectionApp id='goals-micro-frontend-app'>
        <FilterSelect id='goals-filter-select' />
        { !postGoalView && !engageGoalView ? <GoalContainerAll id='goal-container-all'/> : null}
        { engageGoalView ? <GoalContainerEngage id='goal-container-engage'/> : null }
        { postGoalView ? <PostGoalForm id='goals-post-form'/>: null}
        { !postGoalView && !engageGoalView ? <PostGoalBtn id='goal-post-btn'/> : null}
      </SectionApp>
    </MainTheme>
  );
};


export default App;
