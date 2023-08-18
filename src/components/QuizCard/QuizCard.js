import { Wrapper, Topic, Text } from './Quizcard.styled';
import { MdDelete } from 'react-icons/md';

export const QuizCard = ({
  item: { id, topic, level, time, questions },
  onDelete,
}) => {
  return (
    <Wrapper>
      <Topic>{topic}</Topic>
      <Text>
        <b>Level: {level}</b>
      </Text>
      <Text>
        <b>Time: {time} min</b>
      </Text>
      <Text>
        <b>Questions : {questions}</b>
      </Text>
      <div>
        <button onClick={() => onDelete(id)}>
          <MdDelete></MdDelete>
        </button>
        {/*<button onClick={onDelete}>Delete</button>*/}
      </div>
    </Wrapper>
  );
};
