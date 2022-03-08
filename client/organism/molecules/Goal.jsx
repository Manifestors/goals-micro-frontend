import ArticleGoal from './atoms/ArticleGoal';
import ImageProfile from './atoms/ImageProfile';
import DivGoalInfo from './atoms/DivGoalInfo';
import SpanText from './atoms/SpanText';
import SpanTimeTag from './atoms/SpanTimeTag';
import SpanTextColorOnyx from './atoms/SpanTextColorOnyx';
import { useSelector, useDispatch } from 'react-redux';
import { makeViewVisible } from '../features/views/engageGoalView';
import { setEngagedGoal } from '../features/goals/engagedGoalSlice';


const Goal = (props) => {
  const engagedView = useSelector((state) => state.engageGoalView.view);
  const { id, userName, mWhat, mHow, mTimeFrame, sMsgs } = props;
  const dispatch = useDispatch();
  
  const handleEngage = (e) => {
    e.preventDefault();
    dispatch(setEngagedGoal({id, userName, mWhat, mHow, mTimeFrame, sMsgs}));
    dispatch(makeViewVisible());
  };

  return (
    <ArticleGoal isGoalContainerEngage={engagedView} onClick={handleEngage}>
      <ImageProfile src='static/test/theta-pug-1054.png'/>
      <DivGoalInfo>
        <SpanTextColorOnyx>{ userName ? userName : 'Marlon Esparza' }</SpanTextColorOnyx>
        <SpanTextColorOnyx>What?: { mWhat }</SpanTextColorOnyx>
        <SpanTextColorOnyx>How?: { mHow }</SpanTextColorOnyx>
        <SpanText><SpanTimeTag>{ mTimeFrame }</SpanTimeTag></SpanText>
      </DivGoalInfo>
    </ArticleGoal>
  );
};


export default Goal;
