import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from './LoginStyle';
import mealSvg from '../../assets/meal2.svg';

const Login = ({ setIsAuth }) => {
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setIsAuth(true);
    history.push('/');
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} alt="meal" />
        <Header>{'<Clarusway/>'} Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Username" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
