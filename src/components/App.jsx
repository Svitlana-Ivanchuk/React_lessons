import { QuizList } from './QuizList/QuizList';
import initialQuizItems from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Component } from 'react';
//import { IconName } from 'react-icons/hi';

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
  };
  handelDelete = quizId => {
    this.setState(prevState => {
      return {
        quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId),
      };
    });
  };

  render() {
    return (
      <Layout>
        <SearchBar />
        <QuizList items={this.state.quizItems} onDelete={this.handelDelete} />
        <GlobalStyle />
      </Layout>
    );
  }
}
