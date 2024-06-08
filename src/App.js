import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import React from 'react';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import { TM1, TM2, TM3 } from './components/pages/TriggerManagement';
// import { VM1, VM2, VM3 } from './components/pages/VehicleManagement';
// import { Option1, Option2, Option3 } from './components/pages/Settings';
// import Dashboard from './components/pages/Dashboard';
// import Reports from './components/pages/Reports';
// import Triggers from './components/pages/Triggers';

function App() {
  // class App extends React.Component{
  //   render(){

  return (
    <Router>
      <div className="App dm-sans-fonts">

        {/* <Navbar />
        <Sidebar /> */}
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        {/* <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/management/tm1' element={<TM1 />} />
          <Route path='/management/tm2' element={<TM2 />} />
          <Route path='/management/tm3' element={<TM3 />} />
          <Route path='/vehicle/vm1' element={<VM1 />} />
          <Route path='/vehicle/vm2' element={<VM2 />} />
          <Route path='/vehicle/vm3' element={<VM3 />} />
          <Route path='/triggers' element={<Triggers />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/settings/opt1' element={<Option1 />} />
          <Route path='/settings/opt2' element={<Option2 />} />
          <Route path='/settings/op3' element={<Option3 />} />
        </Routes> */}

      </div>
    </Router>
  );
  //   }
  // }

}

export default App;
