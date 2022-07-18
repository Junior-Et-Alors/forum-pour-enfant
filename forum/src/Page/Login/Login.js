import React from 'react';
import ButtonAction from '../../component/butonAction';
import './Login.scss';

export default function Login() {
  const handleClick = (event) => {
    event.preventDefault();
    //Connexion
  };

  return (
    <div className='login'>
      <h1 className='h1-login'>Connexion</h1>
      <div className='container-login'>
        <section className='professor-login'>
          <h2>Professeur</h2>
          <form action='' className='form-login'>
            <div className='input-container-login'>
              <label htmlFor='input-login-email'>Email</label>
              <input
                type='email'
                className='input-login'
                id='input-login-email'
              />
            </div>
            <div className='input-container-login'>
              <label htmlFor='professor-login-password'>Mot de passe</label>
              <input
                type='password'
                className='input-login'
                id='professor-login-password'
              />
            </div>
            <ButtonAction
              onClick={(event) => handleClick(event)}
              txt={'connexion'}
            />
          </form>
        </section>
        <section className='student-login'>
          <h2>Élève</h2>
          <form action='' className='form-login'>
            <div className='input-container-login'>
              <label htmlFor='input-login-class'>Classe</label>
              <input
                type='texte'
                className='input-login'
                id='input-login-class'
              />
            </div>
            <div className='input-container-login'>
              <label htmlFor='student-login-password'>Mot de passe</label>
              <input
                type='password'
                className='input-login'
                id='student-login-password'
              />
            </div>
            <ButtonAction
              onClick={(event) => handleClick(event)}
              txt={'connexion'}
            />
          </form>
        </section>
      </div>
    </div>
  );
}
