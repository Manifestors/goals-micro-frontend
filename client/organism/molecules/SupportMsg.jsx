import ArticleGoal from './atoms/ArticleGoal';
import ImageProfile from './atoms/ImageProfile';
import DivGoalInfo from './atoms/DivGoalInfo';
import SpanTextColorOnyx from './atoms/SpanTextColorOnyx';
import SpanText from './atoms/SpanText';
import ButtonDelete from './atoms/ButtonDelete';
import { updateGoals } from '../features/goals/allGoalsSlice';
import { setEngagedGoal } from "../features/goals/engagedGoalSlice";
import { makeViewVisible } from '../features/views/engageGoalView';
import { useDispatch } from 'react-redux';
import deleteASupportMsg from '../../utils/production/deleteASupportMsg';


const SupportMsg = (props) => {
  const { id, username, sMsg } = props.sMsg;
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    deleteASupportMsg(props.sMsg, dispatch, updateGoals, setEngagedGoal);
    dispatch(makeViewVisible());
  };

  return (
    <ArticleGoal isSupportMsg={true}>
      <ImageProfile src='static/test/theta-pug-1053.png'/>
      <DivGoalInfo>
        <SpanTextColorOnyx>{ username ? username : 'Marlon Esparza' }</SpanTextColorOnyx>
        <SpanTextColorOnyx>Support: { sMsg }</SpanTextColorOnyx>
        <SpanText style={{position: 'relative', zIndex: 2}}>
          <ButtonDelete isSupportMsg={true} style={{position: 'relative', zIndex: 3}} onClick={ handleDelete }>X</ButtonDelete>
        </SpanText>
      </DivGoalInfo>
    </ArticleGoal>
  );
};


export default SupportMsg;
