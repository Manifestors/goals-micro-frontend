import ArticleGoal from './atoms/ArticleGoal';
import ImageProfile from './atoms/ImageProfile';
import DivGoalInfo from './atoms/DivGoalInfo';
import SpanText from './atoms/SpanText';
import SpanTimeTag from './atoms/SpanTimeTag';
import SpanTextColorOnyx from './atoms/SpanTextColorOnyx';


const Goal = (props) => {
  const { isGoalContainerEngage, mWhat, mHow, mTimeFrame } = props;

  return (
    <ArticleGoal isGoalContainerEngage={isGoalContainerEngage}>
      <ImageProfile src='static/test/theta-pug-1054.png'/>
      <DivGoalInfo>
        <SpanTextColorOnyx>Marlon Esparza</SpanTextColorOnyx>
        <SpanTextColorOnyx>What?: { mWhat }</SpanTextColorOnyx>
        <SpanTextColorOnyx>How?: { mHow }</SpanTextColorOnyx>
        <SpanText><SpanTimeTag>{ mTimeFrame }</SpanTimeTag></SpanText>
      </DivGoalInfo>
    </ArticleGoal>
  );
};


export default Goal;
