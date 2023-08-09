import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
const getBorderColor = props => {
  switch (props.level) {
    case 'beginner':
      return props.theme.colors.success;
    case 'intermediate':
      return 'yellow';
    case 'advanced':
      return 'red';
    default:
      return 'black';
  }
};
export const ListItem = styled.li`
  border: 2px solid ${getBorderColor};
  border-radius: 5px;
  width: calc((100% - 32px) / 3);
`;
