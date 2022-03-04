import DivContainer from './atoms/DivContainer';
import Goal from './Goal';
import { useSelector } from 'react-redux';


const GoalContainerAll = (props) => {
  const goals = useSelector((state) => state.allGoals.goals);
  const filterBy = useSelector((state) => state.allGoals.filterBy);
  let mappedGoals;

  if (filterBy === '' || filterBy.toLowerCase() === 'all') {
    mappedGoals = goals.map((val, i) => {
      const {mWhat, mHow, mTimeFrame} = val;
      return (
        <Goal key={i} mWhat={mWhat} mHow={mHow} mTimeFrame={mTimeFrame}/>
      );
    });
  } else {
    mappedGoals = goals.map((val, i) => {
      const {mWhat, mHow, mTimeFrame} = val;

      if (filterBy === mTimeFrame) {
        return (
          <Goal key={i} mWhat={mWhat} mHow={mHow} mTimeFrame={mTimeFrame}/>
        );
      }
    });
  }

  return (
    <DivContainer id='goals-container'>
      {
        mappedGoals
      }
    </DivContainer>
  );
};


export default GoalContainerAll;
