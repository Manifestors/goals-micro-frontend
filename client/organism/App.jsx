import MainTheme from './themes/main';
import SectionApp from './molecules/atoms/SectionApp';
import FilterSelect from './molecules/FilterSelect';
import GoalContainerAll from './molecules/GoalContainerAll';
import GoalContainerEngage from './molecules/GoalContainerEngage';
import PostGoalForm from './molecules/PostGoalForm';
import PostGoalBtn from './molecules/PostGoalBtn';
import { useSelector, useDispatch } from 'react-redux';
import { makeViewVisible, makeViewInvisible } from './features/views/postGoalView';


const App = (props) => {
  const postGoalView = useSelector((state) => state.postGoalView.view)

  return (
    <MainTheme>
      <SectionApp id='goals-micro-frontend-app'>
        <FilterSelect id='goals-filter-select' />
        { !postGoalView ? <GoalContainerAll id='goal-container-all'/> : null}
        {/* <GoalContainerEngage id='goal-container-engage'/> */}
        { postGoalView ? <PostGoalForm id='goals-post-form'/>: <PostGoalBtn id='goal-post-btn'/>}
      </SectionApp>
    </MainTheme>
  );
};


export default App;
