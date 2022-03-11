import Form from "./atoms/Form";
import Label from './atoms/InputLabel';
import TextAreaGoal from "./atoms/TextAreaGoal";
import ButtonSubmit from "./atoms/ButtonSubmit";
import DivInline from "./atoms/DivInline";
import { useSelector, useDispatch } from "react-redux";
import { appendToSupportMessage, clearForm } from "../features/forms/postSupportSlice";
import { makeSupportViewInvisible } from "../features/views/postSupportView";
import { updateGoals } from "../features/goals/allGoalsSlice";
import { setEngagedGoal } from "../features/goals/engagedGoalSlice";
import postASupportMsg from "../../utils/postASupportMsg";


const PostSupportForm = () => {
  const sMsg = useSelector((state) => state.postSupportForm.msg);
  const idOfMsgToSupport = useSelector((state) => state.engagedGoal.id);
  const dispatch = useDispatch();

  const handleSupportMsg = (e) => {
    e.preventDefault();
    dispatch(appendToSupportMessage(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sMsg = e.target['textarea-msg'].value;
    const sMsgObj = {belongsTo: idOfMsgToSupport, sMsg};
    postASupportMsg(sMsgObj, dispatch, updateGoals, setEngagedGoal);
    dispatch(clearForm());
    dispatch(makeSupportViewInvisible());
  };

  return (
    <DivInline>
      <Form id='post-support-form' isPostSupportForm={ true } onSubmit={handleSubmit}>
        <Label htmlFor="textarea-msg" isSupportMessageLabel={ true }>Say, or ask, something supportive.</Label>
        <TextAreaGoal id='textarea-msg' name='textarea-msg' rows='3' value={sMsg} onChange={handleSupportMsg}/>

        <DivInline>
          <ButtonSubmit id='post-support-submit' isPostSupportFormBtn={ true }>Support</ButtonSubmit>
        </DivInline>
      </Form>
    </DivInline>
  );
};


export default PostSupportForm;
