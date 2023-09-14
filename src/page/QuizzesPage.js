import { Component } from 'react';
import { QuizList } from '../components/QuizList/QuizList';
import initialQuizItems from '../data.json';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { LayoutStyled } from '../components/Layuot/Layout.styled';
import { QuizForm } from '../components/QuizForm/QuizForm';
//import { IconName } from 'react-icons/hi';

const initialFilters = {
  topic: '',
  level: 'all',
};

const localStorageKey = 'quiz-filters';

class QuizzesPage extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: initialFilters,
  };

  componentDidMount() {
    //console.log('componentDidMount');
    const savedFilters = localStorage.getItem(localStorageKey);
    if (savedFilters !== null) {
      //console.log(savedFilters);
      this.setState({
        filters: JSON.parse(savedFilters),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    //console.log('this.state', this.state.filters);
    //console.log('prevState', prevState.filters);
    //console.log(prevState.filters === this.state.filters);

    const { filters: prevFilters } = prevState;
    const { filters: nextFilters } = this.state;

    if (prevFilters !== nextFilters) {
      //console.log('filters change');
      localStorage.setItem(localStorageKey, JSON.stringify(nextFilters));
    }
  }

  resetFilters = () => [
    this.setState({
      filters: initialFilters,
    }),
  ];

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
      <LayoutStyled>
        <SearchBar
          topicFilter={filters.topic}
          levelFilter={filters.level}
          onChangeTopic={this.changeTopicFilter}
          onChangeLevel={this.changeLevelFilter}
          onReset={this.resetFilters}
        />
        <QuizForm onAdd={this.addQuiz} />
        <QuizList items={visibleQuizItems} onDelete={this.handelDelete} />
      </LayoutStyled>
    );
  }
}

export default QuizzesPage;
