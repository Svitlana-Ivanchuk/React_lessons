import { Button } from 'components/Button/Button';
import { TaskFormStyle, FieldStyle } from './TaskForm.styled';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/actions';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    console.log(form.elements.text.value);
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <TaskFormStyle onSubmit={handleSubmit}>
      <FieldStyle type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </TaskFormStyle>
  );
};
