import axios from 'axios';
import 'regenerator-runtime/runtime';


const deleteAGoalAjax = async (id, dispatch, action) => {
  const { data } = await axios.delete('/prod/manifestation/delete/one', {
    data: {
      id
    }
  });
  
  dispatch(action(JSON.parse(data)));
};


export default deleteAGoalAjax;
