import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTAO_CLICADO',
    });
  }

  return (
    <Container>
      <Title isRed>
        Login
        <small>Oie</small>
      </Title>
      <p>Lorem ipsum dolor sit amet</p>
      <a href="/">link</a>
      <button onClick={handleClick} type="button">
        Enviar
      </button>
    </Container>
  );
}
