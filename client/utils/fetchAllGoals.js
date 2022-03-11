import axios from 'axios';
import 'regenerator-runtime/runtime';


const fetchAllGoals = async (dispatch, action) => {
  const { data } = await axios.get('/test/goals/all');

  data.forEach((goal) => {
    dispatch(action(goal));
  });
};


export default fetchAllGoals;
