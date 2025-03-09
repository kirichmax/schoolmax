import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm'
import Header from './components/Header'
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound'
import Math10 from './pages/10class/math/Math10';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path='/dashboard/:class' element={<Dashboard/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/math10' element={<Math10/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;