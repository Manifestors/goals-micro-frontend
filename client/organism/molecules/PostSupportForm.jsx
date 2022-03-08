import Form from "./atoms/Form";
import Label from './atoms/InputLabel';
import TextAreaGoal from "./atoms/TextAreaGoal";
import ButtonSubmit from "./atoms/ButtonSubmit";
import DivInline from "./atoms/DivInline";
import { useSelector, useDispatch } from "react-redux";
import { appendToSupportMessage, clearForm } from "../features/forms/postSupportSlice";
import { pushToSupportMessages } from "../features/goals/allGoalsSlice";
import { makeViewInvisible } from "../features/views/postSupportView";


const PostSupportForm = () => {
  const sMsg = useSelector((state) => state.PostSupportForm.sMsg);
  const idOfMsgToSupport = use((state) => state.engadedGoal.id);
  const dispatch = useDispatch();

  const handleSupportMsg = (e) => {
    e.preventDefault();
    dispatch(appendToSupportMessage(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sMsg = e.target['textarea-msg'].value;
    const sMsgObj = {belongsTo: idOfMsgToSupport, sMsg};
    dispatch(pushToSupportMessages(sMsgObj));
    dispatch(clearForm());
    dispatch(makeViewInvisible());
  };

  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(makeViewInvisible());
  };

  return (
    <DivInline>
      <Form id='post-goal-form' isPostSupportForm={ true } onSubmit={handleSubmit}>
        <Label htmlFor="textarea-msg" isSupportMessageLabel={ true }>Say something, or ask something, supportive.</Label>
        <TextAreaGoal id='textarea-msg' name='textarea-msg' rows='3' value={sMsg} onChange={handleSupportMsg}/>

        <DivInline>
          <ButtonSubmit id='post-goal-submit' isPostSupportFormBtn={ true }>Support</ButtonSubmit>
        </DivInline>
      </Form>

      <DivInline>
        <ButtonSubmit isCancelBtn={ true } onClick={handleCancel}>Cancel</ButtonSubmit>
      </DivInline>
    </DivInline>
  );
};


export default PostSupportForm;
