import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { TaskListStyle, TaskItemStyle } from './TaskList.styled';
import { statusFilters } from 'redux/constants';
import { getStatusFilter, getTasks } from 'redux/selectors';
import { selectAllTasks } from 'redux/tasks/selectors';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  const statusFilter = useSelector(getStatusFilter);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <TaskListStyle>
      {visibleTasks.map(task => (
        <TaskItemStyle key={task.id}>
          <Task task={task} />
        </TaskItemStyle>
      ))}
    </TaskListStyle>
  );
};
