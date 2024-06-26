import logo from './Assets/logo.svg';
import menu from './Assets/menu.svg';
import bell from './Assets/bell.svg';
import person from './Assets/person.svg';
import search from './Assets/search.svg';
import arrow from './Assets/arrow.svg';
import * as navstyle from './navbar-style';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ProfileData } from './ProfileData';
import Sidebar from '../../Sidebar/Sidebar';

const Navbar = () => {

    const [drop, setDrop] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const handleMenu = () => { setShowSidebar(!showSidebar) }
    const handleMouseEnter = () => { setDrop(true); }
    const handleMouseLeave = () => { setDrop(false); }

    return (
        <navstyle.Nav>
            <Link to="/"><navstyle.Logo src={logo} alt="logo" /></Link>
            <navstyle.Icons src={menu} alt="menu" onClick={handleMenu} />
            {showSidebar && <Sidebar />}
            <navstyle.Rectangle>
                <img src={search} alt="search" />
                <navstyle.Input type="text" placeholder="Search Here..." />
            </navstyle.Rectangle>
            <navstyle.MidCircle><navstyle.Bell src={bell} alt="bell" /></navstyle.MidCircle>
            <navstyle.Profile onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div style={{ display: 'flex' }}>
                    <navstyle.DP src={person} alt="person" />
                    <navstyle.SmallCircle />
                </div>
                <div>
                    <navstyle.TextName>{localStorage.getItem('name')}</navstyle.TextName><br />
                    <navstyle.TextProf>{localStorage.getItem('occupation')}</navstyle.TextProf>
                </div>
                <div><navstyle.RotateImg className="myarrow" src={arrow} alt="arrow" /></div>
                {drop &&
                    <navstyle.Drop>
                        {ProfileData.map((item, index) => {
                            return (
                                <navstyle.Items item={item} key={index}>
                                    <navstyle.Direct id={item.id} onClick={item.onclick}>{item.title}</navstyle.Direct>
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