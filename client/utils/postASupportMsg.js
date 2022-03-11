import axios from 'axios';
import 'regenerator-runtime/runtime';


const postASupportMsg = async (supportMsgToPost, dispatch, updatedGoals, setEngagedGoal) => {
  const { data } = await axios.post('/test/goals/one/support', {
    ...supportMsgToPost
  });

  data.forEach((goal) => {
    dispatch(updatedGoals(goal));
    dispatch(setEngagedGoal(goal));
  });
};


export default postASupportMsg;
