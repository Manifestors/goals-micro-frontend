import axios from 'axios';
import 'regenerator-runtime/runtime';


const fetchAllGoals = async (dispatch, action) => {
  const { data } = await axios.get('/test/goals/all');
  const allGoals = JSON.parse(data);

  allGoals.forEach((goal) => {
    dispatch(action(goal));
  });
};


export default fetchAllGoals;
