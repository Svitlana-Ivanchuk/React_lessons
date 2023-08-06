import { QuizList } from './QuizList/QuizList';
import quizItems from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
//import { IconName } from 'react-icons/hi';

export const App = () => {
  return (
    <Layout>
      <SearchBar />
      <QuizList items={quizItems} />
      <GlobalStyle />
    </Layout>
  );
};
