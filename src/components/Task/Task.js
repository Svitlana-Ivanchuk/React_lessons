import { MdClose } from 'react-icons/md';
import {
  TaskStyle,
  TextStyle,
  TaskButtonStyle,
  CheckboxStyle,
} from './Task.styled';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/actions';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <TaskStyle>
      <CheckboxStyle type="checkbox" checked={task.completed} />
      <TextStyle>{task.text}</TextStyle>
      <TaskButtonStyle type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </TaskButtonStyle>
    </TaskStyle>
  );
};
