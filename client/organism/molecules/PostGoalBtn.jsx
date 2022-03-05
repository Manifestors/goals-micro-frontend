import DivInline from './atoms/DivInline';
import ButtonSubmit from "./atoms/ButtonSubmit";
import { useDispatch } from 'react-redux';
import { makeViewVisible } from '../features/views/postGoalView';

const PostGoalBtn = () => {
  const dispatch = useDispatch();

  const handleManifest = (e) => {
    e.preventDefault();
    dispatch(makeViewVisible());
  };

  return (
    <DivInline id='post-goals-container'>
      <ButtonSubmit id='post-goal-btn' isPostGoalBtn={ true } onClick={handleManifest}>Manifest</ButtonSubmit>
    </DivInline>
  );
};

export default PostGoalBtn;
