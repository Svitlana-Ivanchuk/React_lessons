import { Task } from 'components/Task/Task';
import { TaskListStyle, TaskItemStyle } from './TaskList.styled';

export const TaskList = () => {
  return (
    <TaskListStyle>
      {[].map(task => (
        <TaskItemStyle key={task.id}>
          <Task task={task} />
        </TaskItemStyle>
      ))}
    </TaskListStyle>
  );
};
