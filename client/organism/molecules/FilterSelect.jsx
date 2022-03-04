import Form from './atoms/Form';
import Label from './atoms/InputLabel';
import Select from './atoms/InputSelect';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/goals/allGoalsSlice';


const FilterSelect = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(setFilter(e.target.value));
  };

  return (
    <Form id='goals-filter-form'>
      <Label htmlFor='goals-filter-select'>Filter Goals</Label>
      <Select id='goals-filter-select' name='goals-filter-select' onChange={handleFilter}>
        <option value=''>Filter by timeframe</option>
        <option value='All'>All</option>
        <option value='Today'>Today</option>
        <option value='Daily'>Daily</option>
        <option value='Weekly'>Weekly</option>
        <option value='Monthly'>Monthly</option>
        <option value='Yearly'>Yearly</option>
      </Select>
    </Form>
  );
};


export default FilterSelect;
