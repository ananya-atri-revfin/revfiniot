import arrow from './Assets/arrow.svg';
import bell from './Assets/bell.svg';
import logo from './Assets/logo.svg';
import menu from './Assets/menu.svg';
import person from './Assets/person.svg';
import search from './Assets/search.svg';
import * as style from './navbar-style';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ProfileData } from './ProfileData';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {

    const [drop, setDrop] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const handleMenu = () => { setShowSidebar(!showSidebar) }
    const handleMouseEnter = () => { setDrop(true); }
    const handleMouseLeave = () => { setDrop(false); }

    return (
        <style.Navbar>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <style.MenuIcon src={menu} alt="menu" onClick={handleMenu} />
            {showSidebar && <Sidebar />}
            <style.Rectangle>
                <img src={search} alt="search" />
                <style.Input type="text" placeholder="Search Here..." />
            </style.Rectangle>
            <style.MediumCircle><style.BellIcon src={bell} alt="bell" /></style.MediumCircle>
            <style.Profile onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div style={{ display: 'flex' }}>
                    <style.DisplayPicture src={person} alt="person" />
                    <style.SmallCircle />
                </div>
                <div>
                    <style.Name>{localStorage.getItem('name')}</style.Name><br />
                    <style.Occupation>{localStorage.getItem('occupation')}</style.Occupation>
                </div>
                <div><img className="myarrow" src={arrow} alt="arrow" /></div>
                {drop &&
                    <style.DropDownMenu>
                        {ProfileData.map((item, index) => {
                            return (
                                <style.DropDownMap item={item} key={index}>
                                    <style.DropDownMenuItems id={item.id} onClick={item.onclick}>{item.title}</style.DropDownMenuItems>
                                </style.DropDownMap>
                            );
                        })}
                    </style.DropDownMenu>
                }
            </style.Profile>
        </style.Navbar>
    );
}

export default Navbar;