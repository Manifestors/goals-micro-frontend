import ArticleGoal from './atoms/ArticleGoal';
import ImageProfile from './atoms/ImageProfile';
import DivGoalInfo from './atoms/DivGoalInfo';
import SpanText from './atoms/SpanText';
import SpanTimeTag from './atoms/SpanTimeTag';
import SpanTextColorOnyx from './atoms/SpanTextColorOnyx';
import ButtonDelete from './atoms/ButtonDelete';
import { useSelector, useDispatch } from 'react-redux';
import { makeViewVisible, makeViewInvisible } from '../features/views/engageGoalView';
import { setEngagedGoal } from '../features/goals/engagedGoalSlice';
import { deleteAGoal } from '../features/goals/allGoalsSlice';
import deleteAGoalAjax from '../../utils/production/deleteAGoal';


const Goal = (props) => {
  const engagedView = useSelector((state) => state.engageGoalView.view);
  const { id, username, mWhat, mHow, mTimeFrame, sMsgs } = props;
  const dispatch = useDispatch();
  
  const handleEngage = (e) => {
    e.preventDefault();
    dispatch(setEngagedGoal({id, username, mWhat, mHow, mTimeFrame, sMsgs}));
    dispatch(makeViewVisible());
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    deleteAGoalAjax(id, dispatch, deleteAGoal);
    dispatch(makeViewInvisible());
  };

  return (
    <ArticleGoal style={{position: 'relative'}} isGoalContainerEngage={engagedView} onClick={handleEngage}>
      <ImageProfile style={{position: 'relative', zIndex: 1}} src='static/test/theta-pug-1054.png'/>
      <DivGoalInfo style={{position: 'relative', zIndex: 1}}>
        <SpanTextColorOnyx style={{position: 'relative', zIndex: 2}}>{ username ? username : 'Marlon Esparza' }</SpanTextColorOnyx>
        <SpanTextColorOnyx style={{position: 'relative', zIndex: 2}}>What?: { mWhat }</SpanTextColorOnyx>
        <SpanTextColorOnyx style={{position: 'relative', zIndex: 2}}>How?: { mHow }</SpanTextColorOnyx>
        <SpanText style={{position: 'relative', zIndex: 2}}>
          <ButtonDelete style={{position: 'relative', zIndex: 3}} onClick={ handleDelete }>X</ButtonDelete>
          <SpanTimeTag style={{position: 'relative', zIndex: 3}}>{ mTimeFrame ? mTimeFrame : 'Today' }</SpanTimeTag>
        </SpanText>
      </DivGoalInfo>
    </ArticleGoal>
  );
};


export default Goal;
