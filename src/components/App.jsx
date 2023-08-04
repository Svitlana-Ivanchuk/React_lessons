import { QuizList } from './QuizList';
import quizItems from '../data.json';

export const App = () => {
  return (
    <div>
      <QuizList items={quizItems} />
    </div>
  );
};
