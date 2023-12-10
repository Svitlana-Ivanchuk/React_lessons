import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from 'components/AppBar/AppBar';
import { Layout } from 'components/Layuot/Layout';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { fetchTasks } from 'redux/tasks/tasksOperations';
import { selectLoading } from 'redux/tasks/selectors';

const TasksPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </Layout>
  );
};

export default TasksPage;
