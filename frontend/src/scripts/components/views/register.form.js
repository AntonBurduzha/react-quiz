import React from 'react'
import { Button, FormControl } from 'react-bootstrap'

const RegisterForm = (props) => {
  let showUniqUser;
  if(props.showUniqUser === false){
    showUniqUser = <p className="text-register text-center">Пользователь с таким email уже существует</p>
  }
  return(
    <div>
      <FormControl
        className="input-register"
        onChange={props.handleLoginInput}
        onFocus={props.changeWrongFields}
        type="text"
        placeholder="Логин"/>
      <FormControl
        className="input-register"
        onChange={props.handleEmailInput}
        onFocus={props.changeWrongFields}
        type="text"
        placeholder="Еmail"/>
      {showUniqUser}
      <FormControl
        className="input-register"
        onChange={props.handlePasswordInput}
        onFocus={props.changeWrongFields}
        type="text"
        placeholder="Пароль"/>
      <Button
        className="btn-register"
        onClick={props.handleResponse}>Подтвердить</Button>
    </div>
  );
};

export {
  RegisterForm
}

