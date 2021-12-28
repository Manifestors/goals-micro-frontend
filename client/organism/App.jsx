import MainTheme from './themes/main';
import SectionApp from './molecules/atoms/SectionApp';
import FilterSelect from './molecules/FilterSelect';
import GoalsContainer from './molecules/GoalsContainer';

const App = (props) => {
  return (
    <MainTheme>
      <SectionApp id='goals-micro-frontend-app'>
        <FilterSelect />
        <GoalsContainer />
      </SectionApp>
    </MainTheme>
  );
};

export default App;
