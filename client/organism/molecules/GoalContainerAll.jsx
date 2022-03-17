import DivContainer from './atoms/DivContainer';
import Goal from './Goal';
import { useSelector } from 'react-redux';


const GoalContainerAll = (props) => {
  const goals = useSelector((state) => state.allGoals.goals);
  const filterBy = useSelector((state) => state.allGoals.filterBy);
  let mappedGoals;

  console.log('Container All: ', goals);

  if (filterBy === '' || filterBy.toLowerCase() === 'all') {
    mappedGoals = goals.map((val, i) => {
      const {id, userName, mWhat, mHow, mTimeFrame, sMsgs} = val;
      return (
        <Goal id={id} key={i} userName={userName} mWhat={mWhat} mHow={mHow} mTimeFrame={mTimeFrame} sMsgs={sMsgs}/>
      );
    });
  } else {
    mappedGoals = goals.map((val, i) => {
      const {id, userName, mWhat, mHow, mTimeFrame, sMsgs} = val;

      if (filterBy === mTimeFrame) {
        return (
          <Goal id={id} key={i} userName={userName} mWhat={mWhat} mHow={mHow} mTimeFrame={mTimeFrame} sMsgs={sMsgs}/>
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
