import axios from 'axios';
import 'regenerator-runtime/runtime';


const postASupportMsg = async (supportMsgToPost, dispatch, updatedGoals, setEngagedGoal) => {
  const { data } = await axios.post('/prod/support/post/one', {
    ...supportMsgToPost
  });

  dispatch(updatedGoals(data));
  dispatch(setEngagedGoal(data));
};


export default postASupportMsg;
