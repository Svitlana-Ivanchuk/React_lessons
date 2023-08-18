import { LevelFilter } from '../LevelFilter';
import { TopicFilter } from '../TopicFilter';
import { Wrapper } from './SearchBar.styled';

export const SearchBar = ({
  topicFilter,
  levelFilter,
  onChangeTopic,
  onChangeLevel,
  onReset,
}) => {
  return (
    <Wrapper>
      <TopicFilter value={topicFilter} onChange={onChangeTopic} />
      <LevelFilter value={levelFilter} onChange={onChangeLevel} />
      <button onClick={onReset}>Reset filters</button>
    </Wrapper>
  );
};
