import React from "react";
import { SideBarData } from "./SideBarData";
import SubMenu from "./SubMenu";
import * as sidestyle from './side-style';

const Sidebar = () => {

    return (
        <sidestyle.Side>
            {SideBarData.map((item, index, icon) => {
                return (
                <SubMenu item={item} key={index} icon={icon}>
                    <sidestyle.Icons>{icon}</sidestyle.Icons>
                    <sidestyle.Items>{item}</sidestyle.Items>
                </SubMenu>
                ) ;
            })}
        </sidestyle.Side>
    );
}

export default Sidebar;