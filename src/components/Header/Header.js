import { StyledLink, Container } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/quizzes">Quizzes</StyledLink>
      <StyledLink to="/todo">ToDo</StyledLink>
    </Container>
  );
};

export default Header;
