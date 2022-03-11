import DivContainer from './atoms/DivContainer';
import DivInline from './atoms/DivInline';
import SupportMsg from './SupportMsg';
import PostSupportForm from './PostSupportForm';
import ButtonSubmit from './atoms/ButtonSubmit';
import Goal from './Goal';
import { useDispatch, useSelector } from 'react-redux';
import { makeViewInvisible } from '../features/views/engageGoalView';
import { makeSupportViewInvisible, makeSupportViewVisible } from '../features/views/postSupportView';
import { clearForm } from '../features/forms/postSupportSlice';


const GoalContainerEngage = () => {
  const engagedView = useSelector((state) => state.engageGoalView.view);
  const engagedGoal = useSelector((state) => state.engagedGoal.goal);
  const postSupportView = useSelector((state) => state.postSupportView.view);
  const dispatch = useDispatch();
  const { id, userName, mWhat, mHow, mTimeFrame, sMsgs } = engagedGoal;

  const handleDisengage = (e) => {
    e.preventDefault();
    dispatch(makeViewInvisible());
  };

  const handleSupport = (e) => {
    e.preventDefault();
    dispatch(makeSupportViewVisible());
  }
  
  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(clearForm());
    dispatch(makeSupportViewInvisible());
  };

  return (
    <DivInline>
      <DivContainer id='enganged-goal-container' isGoalContainerEngage={engagedView}>
        <Goal id={id} userName={userName} mWhat={mWhat} mHow={mHow} mTimeFrame={mTimeFrame} sMsgs={sMsgs} />
        {
          postSupportView ? <PostSupportForm id='support-post-form'/> :
            <DivInline isGoalContainerEngage={engagedView}>
              {
                sMsgs.map((sMsg, i) => {
                  return <SupportMsg key={i} sMsg={sMsg}/>
                })
              }
            </DivInline>
        }
      </DivContainer>

      {
        !postSupportView ?
          <DivInline>
            <ButtonSubmit isCancelBtn={true} onClick={handleDisengage}>Disengage</ButtonSubmit>
            <ButtonSubmit isSupportBtn={true} onClick={handleSupport}>Show Support</ButtonSubmit>
          </DivInline> :
          <DivInline>
            <ButtonSubmit isCancelBtn={ true } onClick={handleCancel}>Cancel</ButtonSubmit>
          </DivInline>
      }
    </DivInline>
  );
};


export default GoalContainerEngage;
