//import { StatusFilter } from 'components/StatusFilter/StatusFilter';
//import { TaskCounter } from 'components/TaskCounter/TaskCounter';

import { HeaderTodoStyle, SectionTodoStyle } from './AppBar.styled';

export const AppBar = () => {
  return (
    <HeaderTodoStyle>
      <SectionTodoStyle>
        <h2>Tasks</h2>
        {/*<TaskCounter />*/}
      </SectionTodoStyle>
      <SectionTodoStyle>
        <h2>Filter by status</h2>
        {/*<StatusFilter />*/}
      </SectionTodoStyle>
    </HeaderTodoStyle>
  );
};
