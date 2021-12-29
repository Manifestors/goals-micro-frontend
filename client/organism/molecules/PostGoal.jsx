import Form from "./atoms/Form";
import Label from './atoms/InputLabel';
import TextAreaGoal from "./atoms/TextAreaGoal";
import Select from "./atoms/InputSelect.jsx";
import ButtonSubmit from "./atoms/ButtonSubmit";

const PostGoal = (props) => {
  return (
    <Form id='post-goal-form'>
      <Label htmlFor="textarea-what" PostGoalLabel={ true }>What will you manifest?</Label>
      <TextAreaGoal id='textarea-what' rows='3'/>
      <Label htmlFor="textarea-how" PostGoalLabel={ true }>How will you manifest this?</Label>
      <TextAreaGoal id='textarea-how' rows='3'/>
      <Select id='goals-tag-select' name='goals-tag-select' goalPostForm={true}>
        <option value=''>Tag by timeframe</option>
        <option value='Today'>Today</option>
        <option value='Daily'>Daily</option>
        <option value='Weekly'>Weekly</option>
        <option value='Monthly'>Monthly</option>
        <option value='Yearly'>Yearly</option>
      </Select>
      <ButtonSubmit id='post-goal-submit'>Manifest</ButtonSubmit>
    </Form>
  );
};

export default PostGoal;
