import logo from './Assets/logo.svg';
import menu from './Assets/menu.svg';
import bell from './Assets/bell.svg';
import person from './Assets/person.svg';
import search from './Assets/search.svg';
import arrow from './Assets/arrow.svg';
// import dark from './Assets/dark.svg';
// import Sidebar from './Sidebar';
import * as navstyle from './navbar-style';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavBarData } from './NavBarData';

const Navbar = () => {

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

    const handleMouseEnter = () => {
        setDrop(true);
    }

    const handleMouseLeave = () => {
        setDrop(false);
    }

    // const [sidebar, setSidebar] = useState(false);

    // const showSidebar = () => {
    //     setSidebar(!sidebar);
    //     if (showSidebar) {
    //         <Sidebar />
    //     }
    // }

    const [drop, setDrop] = useState(false);




    return (

        <navstyle.Nav
        // style = {mode}
        >

            <Link to="/home">
                <navstyle.Logo src={logo} alt="logo" />
            </Link>

            <navstyle.Icons src={menu} alt="menu"
            // onClick={showSidebar}
            />

            <navstyle.Rectangle>
                <img src={search} alt="search" />
                <navstyle.Input type="text" placeholder="Search Here..." />
            </navstyle.Rectangle>

            <navstyle.MidCircle>
                <navstyle.Bell src={bell} alt="bell" />
            </navstyle.MidCircle>

            {/* <navstyle.MidCircle>
                <navstyle.Bell src={dark} alt="dark" 
                onClick={changeMode} 
                />
            </navstyle.MidCircle> */}

            <navstyle.Profile
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div style={{ display: 'flex' }}>
                    <navstyle.DP src={person} alt="person" />
                    <navstyle.SmallCircle />
                </div>
                <div>
                    <navstyle.TextName>Rohan Sharma</navstyle.TextName><br />
                    <navstyle.TextProf>Operations</navstyle.TextProf>
                </div>
                <div>
                    <navstyle.RotateImg className="myarrow" src={arrow} alt="arrow" />

                </div>
                {
                    drop &&
                    <navstyle.Drop>
                        {NavBarData.map((item, index) => {
                            return (
                                <navstyle.Items item={item} key = {index}>
                                    <navstyle.Direct to = {item.path}>{item.title}</navstyle.Direct>
                                </navstyle.Items>
                            );
                        })}
                    </navstyle.Drop>
                }

            </navstyle.Profile>

        </navstyle.Nav>
    );
}

export default Navbar;