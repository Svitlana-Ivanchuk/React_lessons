import { AppBar } from 'components/AppBar/AppBar';
import { Layout } from 'components/Layuot/Layout';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';

const TodoPage = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};

export default TodoPage;
