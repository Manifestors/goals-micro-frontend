import DivContainer from './atoms/DivContainer';
import Goal from './Goal';

const GoalContainerEngage = () => {
  return (
    <DivContainer id='goals-container' isGoalContainerEngage={ true }>
      <Goal isGoalContainerEngage={ true }/>
    </DivContainer>
  );
};

export default GoalContainerEngage;
