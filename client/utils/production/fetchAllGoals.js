import axios from 'axios';
import 'regenerator-runtime/runtime';


const fetchAllGoals = async (dispatch, action) => {
  console.log('Running fetchAllGoals...');
  const { data } = await axios.get('/prod/manifestation/get/all');

  console.log('Returned fetchedGoals... ', data);
  dispatch(action(data));
};


export default fetchAllGoals;
