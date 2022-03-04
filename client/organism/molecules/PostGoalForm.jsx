import Form from "./atoms/Form";
import Label from './atoms/InputLabel';
import TextAreaGoal from "./atoms/TextAreaGoal";
import Select from "./atoms/InputSelect.jsx";
import ButtonSubmit from "./atoms/ButtonSubmit";
import DivInline from "./atoms/DivInline";
import { useSelector, useDispatch } from "react-redux";
import { appendToWhat, appendToHow, setTimeFrame, clearForm } from "../features/forms/postGoalSlice";
import { pushToGoals } from "../features/goals/allGoalsSlice";
import { makeViewInvisible } from "../features/views/postGoalView";

const PostGoalForm = () => {
  const what = useSelector((state) => state.postGoalForm.what);
  const how = useSelector((state) => state.postGoalForm.how);
  const timeFrame = useSelector((state) => state.postGoalForm.timeFrame);

  const dispatch = useDispatch();

  const handleWhat = (e) => {
    dispatch(appendToWhat(e.target.value));
  };

  const handleHow = (e) => {
    dispatch(appendToHow(e.target.value));
  };

  const handleTimeFrame = (e) => {
    dispatch(setTimeFrame(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mWhat = e.target['textarea-what'].value;
    const mHow = e.target['textarea-how'].value;
    const mTimeFrame = e.target['goals-tag-select'].value;
    const mGoal = {mWhat, mHow, mTimeFrame};
    dispatch(pushToGoals(mGoal));
    dispatch(clearForm());
    dispatch(makeViewInvisible());
  };

  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(makeViewInvisible());
  };

  return (
    <DivInline>
      <Form id='post-goal-form' isPostGoalForm={ true } onSubmit={handleSubmit}>

        <Label htmlFor="textarea-what" isPostGoalLabel={ true }>What will you manifest?</Label>
        <TextAreaGoal id='textarea-what' name='textarea-what' rows='3' value={what} onChange={handleWhat}/>

        <Label htmlFor="textarea-how" isPostGoalLabel={ true }>How will you manifest this?</Label>
        <TextAreaGoal id='textarea-how' name='textarea-how' rows='3' value={how} onChange={handleHow}/>

        <DivInline>
          <Select id='goals-tag-select' name='goals-tag-select' isPostGoalForm={ true } value={timeFrame} onChange={handleTimeFrame}>
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

      <DivInline>
        <ButtonSubmit isCancelBtn={ true } onClick={handleCancel}>Cancel</ButtonSubmit>
      </DivInline>
    </DivInline>
  );
};


export default PostGoalForm;
