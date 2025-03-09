import React, { useState } from 'react';
import Classes from '../components/Classes';
import Objects from '../components/Objects';
import logo from '../img/Max.png'

const Dashboard = () => {
  const [showObjects, setShowObjects] = useState(false); // Добавляем состояние

  return (
    <div>
      <Classes onMenuClick={() => setShowObjects(!showObjects)} /> {/* Передаем функцию */}
      <div className='page'>
        {showObjects && <div><Objects /></div>} {/* Условное рендеринг */}
        <div className='info'>
          <p>Доброго времени суток! Добро пожаловать на сайт SchoolMax — место, где образование встречает возможности! Мы рады приветствовать каждого нового пользователя. Здесь ты найдешь обширные ресурсы, помогающие в обучении, возможности для личностного и профессионального развития. Наша цель — вдохновлять и поддерживать всех, кто стремится к знаниям и росту.Помни, что знания — это ключ к успеху, и мы рады видеть тебя в нашем образовательном сообществе! Вперед покорять новые вершины!</p>
          <img src={logo} alt='SchoolMax'/>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;