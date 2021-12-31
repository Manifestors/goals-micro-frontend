import Form from "./atoms/Form";
import Label from './atoms/InputLabel';
import TextAreaGoal from "./atoms/TextAreaGoal";
import Select from "./atoms/InputSelect.jsx";
import ButtonSubmit from "./atoms/ButtonSubmit";
import DivInline from "./atoms/DivInline";

const PostGoalForm = (props) => {
  return (
    <Form id='post-goal-form' isPostGoalForm={ true }>
      <Label htmlFor="textarea-what" isPostGoalLabel={ true }>What will you manifest?</Label>
      <TextAreaGoal id='textarea-what' rows='3'/>
      <Label htmlFor="textarea-how" isPostGoalLabel={ true }>How will you manifest this?</Label>
      <TextAreaGoal id='textarea-how' rows='3'/>
      <DivInline>
        <Select id='goals-tag-select' name='goals-tag-select' isPostGoalForm={ true }>
          <option value=''>Tag by timeframe</option>
          <option value='Today'>Today</option>
          <option value='Daily'>Daily</option>
          <option value='Weekly'>Weekly</option>
          <option value='Monthly'>Monthly</option>
          <option value='Yearly'>Yearly</option>
        </Select>
        <ButtonSubmit id='post-goal-submit' isPostGoalFormBtn={ true }>Manifest</ButtonSubmit>
      </DivInline>
    </Form>
  );
};

export default PostGoalForm;