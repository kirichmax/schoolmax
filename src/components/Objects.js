import React from 'react';
import { Link } from 'react-router-dom';

const Objects = () => {
  return (
    <div className='objects'>
      <p><Link to='/math10'>Математика</Link></p>
      <p><Link to='/math10'>Физика</Link></p>
      <p><Link to='/math10'>Информатика</Link></p>
      <p><Link to='/math'>История</Link></p>
      <p><Link to='/math'>Русский язык</Link></p>
      <p><Link to='/math'>Английский язык</Link></p>
      <p><Link to='/math'>ОБЗР</Link></p>
      <p><Link to='/math'>Обществознание</Link></p>
      <p><Link to='/math'>Изобразительное исскуство</Link></p>
      <p><a href = 'https://разговорыоважном.рф/'>Разговоры о важном</a></p>
      <p><Link to='/math'>География</Link></p>
      <p><Link to='/math'>Биология</Link></p>
      <p><Link to='/math'>Химия</Link></p>
      <p><Link to='/math'>Литература</Link></p>
      <p><Link to='/math'>Технология</Link></p>
      <p><Link to='/math'>Физическая культура</Link></p>
    </div>
  );
};

export default Objects;
