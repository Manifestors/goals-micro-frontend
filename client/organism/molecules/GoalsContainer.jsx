import DivContainer from './atoms/DivContainer';
import ArticleGoal from './atoms/ArticleGoal';
import ImageProfile from './atoms/ImageProfile';
import DivGoalInfo from './atoms/DivGoalInfo';
import SpanText from './atoms/SpanText';
import SpanTimeTag from './atoms/SpanTimeTag';
import SpanTextColorOnyx from './atoms/SpanTextColorOnyx';

const GoalsContainer = (props) => {
  const testArrayForLoop = ['','','','','','','',''];
  const testChildren = testArrayForLoop.map((val, i) => {
    return (
      <ArticleGoal key={i}>
        <ImageProfile src='static/test/theta-pug-1054.png'/>
        <DivGoalInfo>
          <SpanText>Marlon Esparza</SpanText>
          <SpanText>What?: <SpanTextColorOnyx>I want to run a total of 24 miles a month.</SpanTextColorOnyx></SpanText>
          <SpanText>How?: <SpanTextColorOnyx>I will run 6 miles a week.</SpanTextColorOnyx></SpanText>
          <SpanText><SpanTimeTag>Monthly</SpanTimeTag></SpanText>
        </DivGoalInfo>
      </ArticleGoal>
    );
  });

  // const testChildren = [];

  return (
    <DivContainer id='goals-container'>
      {
        testChildren
      }
    </DivContainer>
  );
};

export default GoalsContainer;
