import axios from 'axios';
import 'regenerator-runtime/runtime';


const deleteASupportMsg = async (supportMsgToDelete, dispatch, action1, action2) => {
  const { data } = await axios.delete('/test/goals/one/support/delete', {
    data: {
      ...supportMsgToDelete
    }
  });

  dispatch(action1(data.updatedGoals));
  dispatch(action2(data.updatedGoal));
};


export default deleteASupportMsg;
