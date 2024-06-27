import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import AuthGuard from './AuthenticationMiddleware';
import Error404 from './components/Error/Error404';

function App() {
  const token = localStorage.getItem('token')
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={AuthGuard(token)} />
          <Route path='/*' Component={Error404} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;