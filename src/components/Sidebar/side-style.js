import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Sidebar = styled.aside
`margin-top: 1%;
display: flex;
position: absolute;
top: 15%;
left: 0px;
width: max-content;
padding: 2% 4%;
flex-direction: column;
align-items: flex-start;
gap: 24px;
flex-shrink: 0;
border-right: 1px solid var(--Base-Color-Lines, #D8D8D8);
background: var(--Base-Color-Row-White, #FFF);
`

export const LinkStyled = styled(Link)
`
display: flex;
padding: 12px;
text-align: left;
align-self: stretch;
border-radius: 8px;
text-decoration: none;
color: var(--Fonts-Secondary-Font, #4C4C4C);
font-size: 14px;
font-weight: 500;
line-height: 20px;
&:hover{
  color: orange;
  // background-color: lightgrey;
}
@media (max-width: 1180px){
    font-size: 12px;
}`

export const Icons = styled.img
`padding-left: 5%;
@media (max-width: 1180px){
    width: 15px;
    height: 15px;
}`
export const SidebarItems = styled.li
`cursor: pointer;
font-size: 14px;
border-radius: 10%;
padding: 5%;
width: 100%;
@media (max-width: 1180px){
    font-size: 12px;
}
&:hover{
    background-color: lightgrey;
}`