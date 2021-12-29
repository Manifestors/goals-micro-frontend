import MainTheme from './themes/main';
import SectionApp from './molecules/atoms/SectionApp';
import FilterSelect from './molecules/FilterSelect';
import GoalsContainer from './molecules/GoalsContainer';
import PostGoal from './molecules/PostGoal';

const App = (props) => {
  return (
    <MainTheme>
      <SectionApp id='goals-micro-frontend-app'>
        <FilterSelect id='goals-filter-select'/>
        <GoalsContainer id='goals-container'/>
        <PostGoal id='goals-post-form'/>
      </SectionApp>
    </MainTheme>
  );
};

export default App;
