import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import AuthGuard from './auth.guard';

function App() {
  const token = localStorage.getItem('token')
  console.log(token)
  return (
    <Router>
       <div className="App dm-sans-fonts">
        <Routes>
          <Route exact path='*' element={AuthGuard(token) } />
         </Routes>
      </div>
    </Router>
  );
}

export default App;