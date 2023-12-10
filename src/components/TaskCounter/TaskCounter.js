import { useSelector } from 'react-redux';
import { TaskCounterStyle } from './TaskCounter.styled';
import { selectAllTasks } from 'redux/tasks/selectors';

export const TaskCounter = () => {
  const tasks = useSelector(selectAllTasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <TaskCounterStyle>Active: {count.active}</TaskCounterStyle>
      <TaskCounterStyle>Completed: {count.completed}</TaskCounterStyle>
    </div>
  );
};
