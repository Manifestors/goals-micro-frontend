import axios from 'axios';
import 'regenerator-runtime/runtime';


const postAGoal = async (goalToPost, dispatch, action) => {
  const { data } = await axios.post('/test/goals/one', {
    ...goalToPost
  });
  
  data.forEach((goal) => {
    dispatch(action(goal));
  });
};


export default postAGoal;
