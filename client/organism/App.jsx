import FilterSelect from './molecules/FilterSelect';
import GoalsContainer from './molecules/GoalsContainer';

const App = ({ lightMode }) => {
  return (
    <section id='goals-micro-frontend-app'>
      <FilterSelect lightMode={lightMode}/>
      <GoalsContainer lightMode={lightMode}/>
    </section>
  );
};

export default App;
