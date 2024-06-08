import Navbar from "../Home/Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { TM1, TM2, TM3 } from '../Sidebar/pages/TriggerManagement';
import { VM1, VM2, VM3 } from '../Sidebar/pages/VehicleManagement';
import { Option1, Option2, Option3 } from '../Sidebar/pages/Settings';
import Dashboard from '../Sidebar/pages/Dashboard';
import Reports from '../Sidebar/pages/Reports';
import Triggers from '../Sidebar/pages/Triggers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    // const [mode, setMode] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const changeMode = () => {
    //     if(mode.color === 'black'){
    //         setMode({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //     }
    //     else{
    //         setMode({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //     }
    // }
    return (

        <div 
        // style = {props.mode}
        >
            <Navbar />
            <Sidebar />
            <Routes>

                <Route path='/home/dashboard' element={Dashboard} />
                <Route path='/home/management/tm1' element={<TM1 />} />
                <Route path='/home/management/tm2' element={<TM2 />} />
                <Route path='/home/management/tm3' element={<TM3 />} />
                <Route path='/home/vehicle/vm1' element={<VM1 />} />
                <Route path='/home/vehicle/vm2' element={<VM2 />} />
                <Route path='/home/vehicle/vm3' element={<VM3 />} />
                <Route path='/home/triggers' element={<Triggers />} />
                <Route path='/home/reports' element={<Reports />} />
                <Route path='/home/settings/opt1' element={<Option1 />} />
                <Route path='/home/settings/opt2' element={<Option2 />} />
                <Route path='/home/settings/op3' element={<Option3 />} />

            </Routes>

        </div>

    );
}

export default Home;