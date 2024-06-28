import React from "react";
import { SideBarData } from "./SideBarData";
import SubMenu from "./SubMenu";
import * as style from './side-style';

const Sidebar = () => {
        return (
            <style.Sidebar>
                {SideBarData.map((item, index, icon) => {
                    return (
                    <SubMenu item={item} key={index} icon={icon}>
                        <style.Icons>{icon}</style.Icons>
                        <style.SidebarItems>{item}</style.SidebarItems>
                    </SubMenu>
                    ) ;
                })}
            </style.Sidebar>
        );   
}

export default Sidebar;