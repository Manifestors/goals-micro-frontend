import MainTheme from './themes/main';
import SectionApp from './molecules/atoms/SectionApp';
import FilterSelect from './molecules/FilterSelect';
import GoalsContainer from './molecules/GoalsContainer';
import PostGoalForm from './molecules/PostGoalForm';
import PostGoalBtn from './molecules/PostGoalBtn';

const App = (props) => {
  return (
    <MainTheme>
      <SectionApp id='goals-micro-frontend-app'>
        <FilterSelect id='goals-filter-select' />
        <GoalsContainer id='goals-container'/>
        <PostGoalForm id='goals-post-form' />
        <PostGoalBtn />
      </SectionApp>
    </MainTheme>
  );
};

export default App;
