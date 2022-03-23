import axios from 'axios';
import 'regenerator-runtime/runtime';


const fetchAllGoals = async (dispatch, action) => {
  const { data } = await axios.get('/prod/manifestation/get/all');
  dispatch(action(data));
};


export default fetchAllGoals;
