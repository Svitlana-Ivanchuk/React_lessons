import { Button } from 'components/Button/Button';
import { TaskFormStyle, FieldStyle } from './TaskForm.styled';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/tasksOperations';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const text = form.elements.text.value;
    console.log(text);
    if (text !== '') {
      dispatch(addTask(text));
      form.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };

  return (
    <TaskFormStyle onSubmit={handleSubmit}>
      <FieldStyle type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </TaskFormStyle>
  );
};
