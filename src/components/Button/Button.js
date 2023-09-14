import { ButtonStyle } from './Button.styled';

export const Button = ({ selected = false, children, ...otherProps }) => {
  return (
    <ButtonStyle type="button" {...otherProps}>
      {children}
    </ButtonStyle>
  );
};
