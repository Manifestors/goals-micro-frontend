import Container from './atoms/Container';
import Goal from './atoms/Goal';
import ProfileImage from './atoms/ProfileImage';
import GoalInfo from './atoms/GoalInfo';
import Paragraph from './atoms/Paragraph';

const GoalsContainer = ({ lightMode }) => {
  return (
    <Container id='goals-container' lightMode={lightMode}>
      <Goal>
        <ProfileImage src='static/test/theta-pug-1053.png'/>
        <GoalInfo>
          <Paragraph>Firstname Lastname</Paragraph>
          <Paragraph>What?: I want to run a total of 24 miles a month.</Paragraph>
          <Paragraph>How?: I will run 6 miles a week. I will run Monday...</Paragraph>
          <div>
            <time>5 hrs ago</time><span>Monthly</span>
          </div>
        </GoalInfo>
      </Goal>
    </Container>
  );
};

export default GoalsContainer;
