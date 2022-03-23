import axios from 'axios';
import 'regenerator-runtime/runtime';


const deleteASupportMsg = async (sMsg, dispatch, updateGoals, setEngagedGoal) => {
  const { data } = await axios.delete('/prod/support/delete/one', {
    data: {
      ...sMsg
    }
  });

  dispatch(updateGoals(data));
  dispatch(setEngagedGoal(data));
};


export default deleteASupportMsg;
