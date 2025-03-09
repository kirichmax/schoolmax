import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
  {
    id: 1,
    login: 'SchoolMax',
    password: 'qwerty1234',
    class: 10,
    city: 'Березовский',
    school: 5,
  },
  {
    id: 2,
    login: 'Max',
    password: '1234',
    class: 10,
    city: 'Березовский',
    school: 2,
  },
];

const LoginForm = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 

  const handleLogin = (e) => {
    e.preventDefault(); 

    const user = users.find((user) => user.login === login && user.password === password);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); // Сохраняем данные пользователя в localStorage
      navigate(`/dashboard/${user.class}`);
      
    } else {
      setError('Неверный логин или пароль');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className='entrance'>
      <form onSubmit={handleLogin}> {/* Добавляем onSubmit */}
        <div className='up'>
          <h2>Авторизация</h2>
          <h3>на платформе</h3>
        </div>
        <label>
          <input
            type="text"
            placeholder='Логин'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>
        <br /><br />
        <label>
          <input
            type="password"
            placeholder='Пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br /><br />
        {error && <p style={{ color: 'red' }}>{error}</p>} 
        <button type="submit"> 
          Вход
        </button>
        <button type="button" onClick={handleRegister}>
          Регистрация
        </button>
      </form>
    </div>
  );
};
export default LoginForm