import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  color: white;
  font-size: 1.35em;
  border: 0;
  border-radius: 10px;
  display: flex;
  margin: 0 0 20px 0;
  padding: 6px 3px;
  width: 100%;
  background: black;
`;

const Button = styled.button`
  background: black;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px midnightblue;
  border-radius: 10px;
`;

const Title = styled.div`
  font-family: 'Audiowide', cursive;
  font-size: 68px;
  margin-bottom: 40px;
  color: white;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const LoginDiv = styled.div`
    background: #393E44;
    padding: 25px;
    border-radius: 10px;
`;

const Login = (props) => {

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  return (
    <LoginDiv>
      <Title>CrypTick</Title>
      <div className="fields">
        <Input type="text" placeholder="Enter Email" className="email" onChange={e => setEmail(e.target.value)}/>
        <Input type="text" placeholder="Enter Password" className="password" onChange={e => setPassword(e.target.value)}/>
      </div>
      <Buttons>
        <Button className="login-btn" onClick={() => props.authenticate({email, password})}>Login</Button>
        <Button className="signup-btn" onClick={() => props.signup({email, password})}>Signup</Button>
      </Buttons>
    </LoginDiv>
  )
}



export default Login;