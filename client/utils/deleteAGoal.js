import axios from 'axios';
import 'regenerator-runtime/runtime';


const deleteAGoal = async (goalId, dispatch, action) => {
  const { data } = await axios.delete('/test/goals/one/delete', {
    data: {
      goalId
    }
  });

  dispatch(action(data));
};


export default deleteAGoal;
