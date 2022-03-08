import ArticleGoal from './atoms/ArticleGoal';
import ImageProfile from './atoms/ImageProfile';
import DivGoalInfo from './atoms/DivGoalInfo';
import SpanTextColorOnyx from './atoms/SpanTextColorOnyx';


const SupportMsg = (props) => {
  console.log('Support Msg Props:', props);
  const { sMsg } = props.sMsg;

  return (
    <ArticleGoal isSupportMsg={true}>
      <ImageProfile src='static/test/theta-pug-1054.png'/>
      <DivGoalInfo>
        <SpanTextColorOnyx>{ userName ? userName : 'Marlon Esparza' }</SpanTextColorOnyx>
        <SpanTextColorOnyx>Support: { sMsg }</SpanTextColorOnyx>
      </DivGoalInfo>
    </ArticleGoal>
  );
};


export default SupportMsg;
