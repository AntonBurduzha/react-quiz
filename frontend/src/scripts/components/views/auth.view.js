import React from 'react'
import { Image } from 'react-bootstrap'
import { AuthLayer } from '../layers/auth.layer'
import { AuthForm } from './auth.form'

const AuthView = (props) => {
  return (
    <AuthLayer>
      <Image className="img-register" src='http://imgdepo.com/id/i10075670' responsive />
      <h2 className="text-center">Авторизация</h2>
      <AuthForm
        handleLoginInput={props.handleLoginInput}
        handlePasswordInput={props.handlePasswordInput}
        handleResponse={props.handleResponse}
        changeWrongFields={props.changeWrongFields}
        loginIsVerified={props.loginIsVerified}
        passIsVerified={props.passIsVerified}/>
    </AuthLayer>
  )
};

export {
  AuthView
}