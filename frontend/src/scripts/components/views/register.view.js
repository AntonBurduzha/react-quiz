import React from 'react'
import { Image } from 'react-bootstrap'
import { AuthLayer } from '../layers/auth.layer'
import { RegisterForm } from './register.form'

const RegisterView = (props) => {
  return (
    <AuthLayer>
      <Image className="img-register" src='http://imgdepo.com/id/i10075670' responsive />
      <h2 className="text-center">Регистрация</h2>
      <RegisterForm
        handleLoginInput={props.handleLoginInput}
        handleEmailInput={props.handleEmailInput}
        handlePasswordInput={props.handlePasswordInput}
        handleResponse={props.handleResponse}
        changeWrongFields={props.changeWrongFields}
        showUniqUser={props.showUniqUser}/>
    </AuthLayer>
  )
};

export {
  RegisterView
}