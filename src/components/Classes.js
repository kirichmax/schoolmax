import React from 'react';
import { Link } from 'react-router-dom';

const Classes = ({ onMenuClick }) => {
  return (
    <div className='classes'>
      <button onClick={onMenuClick}>Меню</button>
      <Link to='/class1'>1 класс</Link>
      <Link to='/class2'>2 класс</Link>
      <Link to='/class3'>3 класс</Link>
      <Link to='/class4'>4 класс</Link>
      <Link to='/class5'>5 класс</Link>
      <Link to='/class6'>6 класс</Link>
      <Link to='/class7'>7 класс</Link>
      <Link to='/class8'>8 класс</Link>
      <Link to='/class9'>9 класс</Link>
      <Link to='/class10'>10 класс</Link>
      <Link to='/class11'>11 класс</Link>
    </div>
  );
};

export default Classes;