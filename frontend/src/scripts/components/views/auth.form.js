import React from 'react'
import {Button, FormControl} from 'react-bootstrap'

const AuthForm = (props) => {
  let loginIsVerified, passIsVerified;
  if(props.loginIsVerified === false){
    loginIsVerified = <p className="text-register text-center">Пользователь с таким логином не существует</p>
  }
  if(props.passIsVerified === false){
    passIsVerified = <p className="text-register text-center">Не верный пароль</p>
  }
  return (
    <div>
      <FormControl
        className="input-register"
        onChange={props.handleLoginInput}
        onFocus={props.changeWrongFields}
        type="text"
        placeholder="Логин"/>
      {loginIsVerified}
      <FormControl
        className="input-register"
        onChange={props.handlePasswordInput}
        onFocus={props.changeWrongFields}
        type="text"
        placeholder="Пароль"/>
      {passIsVerified}
      <Button
        className="btn-register"
        onClick={props.handleResponse}>Войти</Button>
    </div>
  );
};

export {
  AuthForm
}