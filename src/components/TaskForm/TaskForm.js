import { Button } from 'components/Button/Button';
import { TaskFormStyle, FieldStyle } from './TaskForm.styled';

export const TaskForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    form.reset();
  };

  return (
    <TaskFormStyle onSubmit={handleSubmit}>
      <FieldStyle type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </TaskFormStyle>
  );
};
