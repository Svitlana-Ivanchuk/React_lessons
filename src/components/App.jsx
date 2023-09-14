import HomePage from 'page/HomePage';
import QuizzesPage from 'page/QuizzesPage';
import TodoPage from 'page/TodoPage';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/quizzes" element={<QuizzesPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="*" element={<h1>No such page exists</h1>} />
        </Route>
      </Routes>
    </>
  );
};
