import { QuizList } from './QuizList/QuizList';
import initialQuizItems from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Component } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
//import { IconName } from 'react-icons/hi';

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topic: '',
      level: '',
    },
  };

  changeTopicFilter = newTopic => {
    this.setState(prevState => {
      return {
        filters: { ...prevState.filters, topic: newTopic },
      };
    });
  };
  handelDelete = quizId => {
    //console.log(quizId);
    this.setState(prevState => {
      return {
        quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId),
      };
    });
  };

  addQuiz = newQuiz => {
    console.log(newQuiz);
    this.setState(prevState => {
      return {
        quizItems: [...prevState.quizItems, newQuiz],
      };
    });
  };
  render() {
    const { filters, quizItems } = this.state;
    const visibleQuizItems = quizItems.filter(quiz =>
      quiz.topic.toLowerCase().includes(filters.topic.toLowerCase())
    );
    return (
      <Layout>
        <SearchBar
          topicFilter={filters.topic}
          onChangeTopic={this.changeTopicFilter}
        />
        <QuizForm onAdd={this.addQuiz} />
        <QuizList items={visibleQuizItems} onDelete={this.handelDelete} />
        <GlobalStyle />
      </Layout>
    );
  }
}
