import { MdClose } from 'react-icons/md';
import {
  TaskStyle,
  TextStyle,
  TaskButtonStyle,
  CheckboxStyle,
} from './Task.styled';

export const Task = ({ task }) => {
  return (
    <TaskStyle>
      <CheckboxStyle type="checkbox" checked={task.completed} />
      <TextStyle>{task.text}</TextStyle>
      <TaskButtonStyle>
        <MdClose size={24} />
      </TaskButtonStyle>
    </TaskStyle>
  );
};
