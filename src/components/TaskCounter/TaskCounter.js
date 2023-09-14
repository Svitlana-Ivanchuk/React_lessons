import { TaskCounterStyle } from './TaskCounter.styled';

export const TaskCounter = () => {
  return (
    <div>
      <TaskCounterStyle>Active: 0</TaskCounterStyle>
      <TaskCounterStyle>Completed: 0</TaskCounterStyle>
    </div>
  );
};
