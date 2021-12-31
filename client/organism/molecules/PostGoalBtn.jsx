import DivInline from './atoms/DivInline';
import ButtonSubmit from "./atoms/ButtonSubmit";

const PostGoalBtn = (props) => {
  return (
    <DivInline id='post-goals-container'>
      <ButtonSubmit id='post-goal-btn' isPostGoalBtn={ true }>Manifest</ButtonSubmit>
    </DivInline>
  );
};

export default PostGoalBtn;
