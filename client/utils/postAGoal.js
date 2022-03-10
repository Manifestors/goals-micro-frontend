import axios from 'axios';
import 'regenerator-runtime/runtime';


const postAGoal = async (goalToPost, dispatch, action) => {
  console.log('Goal To Post: ', goalToPost);
  const { data } = await axios.post('/test/goals/one', {
    ...goalToPost
  });
  
  console.log('Response Data: ', data);
  const allGoals = JSON.parse(data) || [];

  allGoals.forEach((goal) => {
    dispatch(action(goal));
  });
};


export default postAGoal;
