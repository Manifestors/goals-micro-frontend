import DivContainer from './atoms/DivContainer';
import DivInline from './atoms/DivInline';
import SupportMsg from './SupportMsg';
import PostSupportForm from './PostSupportForm';
import ButtonSubmit from './atoms/ButtonSubmit';
import Goal from './Goal';
import { useDispatch, useSelector } from 'react-redux';
import { makeViewInvisible } from '../features/views/engageGoalView';


const GoalContainerEngage = () => {
  const engagedView = useSelector((state) => state.engageGoalView.view);
  const engagedGoal = useSelector((state) => state.engagedGoal.goal);
  const postSupportView = useSelector((state) => state.postSupportView.view);
  const dispatch = useDispatch();
  const { userName, mWhat, mHow, mTimeFrame, sMsgs } = engagedGoal;

  const handleDisengage = (e) => {
    e.preventDefault();
    dispatch(makeViewInvisible());
  };

  const handleSupport = (e) => {
    e.preventDefault();
  }

  return (
    <DivInline>
      <DivContainer id='goals-container' isGoalContainerEngage={engagedView}>
        <Goal userName={userName} mWhat={mWhat} mHow={mHow} mTimeFrame={mTimeFrame} />
        {
          postSupportView ? <PostSupportForm id='support-post-form'/> :
            sMsgs.map((sMsg) => {
              return <SupportMsg key={i} sMsg={sMsg}/>
            })
        }
      </DivContainer>

      <DivInline>
        <ButtonSubmit isCancelBtn={true} onClick={handleDisengage}>Disengage</ButtonSubmit>
        <ButtonSubmit isSupportBtn={true} onClick={handleSupport}>Show Support</ButtonSubmit>
      </DivInline>
    </DivInline>
  );
};


export default GoalContainerEngage;
