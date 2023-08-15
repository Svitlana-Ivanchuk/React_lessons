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
      level: 'all',
    },
  };

  changeTopicFilter = newTopic => {
    this.setState(prevState => {
      return {
        filters: { ...prevState.filters, topic: newTopic },
      };
    });
  };

  changeLevelFilter = newLevel => {
    this.setState(prevState => {
      return {
        filters: { ...prevState.filters, level: newLevel },
      };
    });
  };
  handelDelete = quizId => {
    this.setState(prevState => {
      return {
        quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId),
      };
    });
  };

  addQuiz = newQuiz => {
    this.setState(prevState => {
      return {
        quizItems: [...prevState.quizItems, newQuiz],
      };
    });
  };

  //можна винести з рендера:
  //getVisibleQuizItems = () => {
  //  const { quizItems, filters } = this.state;
  //  const lowerCaseTopic = filters.topic.toLowerCase();

  //  return quizItems.filter(quiz => {
  //    const hasTopic = quiz.topic.toLowerCase().includes(lowerCaseTopic);
  //    if (filters.level === 'all') {
  //      return hasTopic;
  //    }
  //    return hasTopic && quiz.level === filters.level;
  //  });
  //};

  render() {
    const { filters, quizItems } = this.state;
    const visibleQuizItems = quizItems.filter(quiz => {
      if (filters.level === 'all') {
        return quiz.topic.toLowerCase().includes(filters.topic.toLowerCase());
      }
      return (
        quiz.topic.toLowerCase().includes(filters.topic.toLowerCase()) &&
        quiz.level === filters.level
      );
    });
    //const visibleQuizItems = this.getVisibleQuizItems();

    return (
      <Layout>
        <SearchBar
          topicFilter={filters.topic}
          levelFilter={filters.level}
          onChangeTopic={this.changeTopicFilter}
          onChangeLevel={this.changeLevelFilter}
        />
        <QuizForm onAdd={this.addQuiz} />
        <QuizList items={visibleQuizItems} onDelete={this.handelDelete} />
        <GlobalStyle />
      </Layout>
    );
  }
}
