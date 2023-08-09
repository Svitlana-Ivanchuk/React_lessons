import { Wrapper, Topic, Text } from './Quizcard.styled';

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
        <button onClick={() => onDelete(id)}>Delete</button>
        {/*<button onClick={onDelete}>Delete</button>*/}
      </div>
    </Wrapper>
  );
};
