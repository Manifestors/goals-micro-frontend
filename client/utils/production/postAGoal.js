import axios from 'axios';
import 'regenerator-runtime/runtime';


const postAGoal = async (goalToPost, dispatch, action) => {
  const { data } = await axios.post('/prod/manifestation/post/one', {
    ...goalToPost
  });
  
  dispatch(action(data));
};


export default postAGoal;
