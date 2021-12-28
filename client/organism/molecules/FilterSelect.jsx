import Form from './atoms/Form';
import Label from './atoms/InputLabel';
import Select from './atoms/InputSelect';

const FilterSelect = ({ lightMode }) => {
  return (
    <Form id='goals-filter-form' lightMode={lightMode}>
      <Label htmlFor='goals-filter-select'>Filter Goals</Label>
      <Select id='goals-filter-select' name='goals-filter-select' lightMode={lightMode}>
        <option value=''>Filter by timeframe</option>
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
