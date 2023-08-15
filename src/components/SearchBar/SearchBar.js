import { LevelFilter } from '../LevelFilter';
import { TopicFilter } from '../TopicFilter';
import { Wrapper } from './SearchBar.styled';

export const SearchBar = ({ topicFilter, onChangeTopic }) => {
  return (
    <Wrapper>
      <TopicFilter value={topicFilter} onChange={onChangeTopic} />
      <LevelFilter />
    </Wrapper>
  );
};
