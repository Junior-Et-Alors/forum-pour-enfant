import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Page/Login/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
