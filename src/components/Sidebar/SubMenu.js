import React, { useState } from "react";
import * as sidestyle from './side-style';

const SubMenu = ({ item }) => {

	const [submenu, setSubmenu] = useState(false);

	const showSubmenu = () => setSubmenu(!submenu);

	return (
		<div>
			<sidestyle.LinkStyled to={item.path}
				onClick={
					item.submenu && showSubmenu
				}>
					{item.title}
					{item.submenu && submenu
						? item.toOpen
						: item.subMenu}
			</sidestyle.LinkStyled>
			{submenu &&
				item.submenu.map((item, index) => {
					return (
						<sidestyle.LinkStyled to={item.path} key={index}>
							{item.icon}
							{item.title}
						</sidestyle.LinkStyled>
					);
				})}
		</div>

	);
};

export default SubMenu;
