import { Button } from 'components/Button/Button';
import { StatusFilterStyle } from './StatusFilter.styled';

export const StatusFilter = () => {
  return (
    <StatusFilterStyle>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </StatusFilterStyle>
  );
};
