import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav
    `padding: 1% 2%;
border-bottom: 1px solid var(--Base-Color-Lines, #D8D8D8);
display: flex;
align-items: center;
`

export const Logo = styled.img
    `margin-left: 0%;
margin-right:75px;
@media (max-width: 1180px){
    height: 40px;
    margin-right: 50px;
}
`

export const Input = styled.input
    `color: var(--Fonts-Secondary-Font, #4C4C4C);
font-size: 14px;
font-weight: 500;
border: none;
background: var(--Base-Color-Row-Highlight, #FAFAFA);
outline: none;
@media (max-width: 1180px){
    font-size: 12px;
}
`

export const Rectangle = styled.div
    `width: 100%;
    height:auto;
padding: 12px 24px;
border-radius: 12px;
border: 1px solid var(--Base-Color-Lines, #D8D8D8);
background: var(--Base-Color-Row-Highlight, #FAFAFA);
display: flex;
align-items: center;
gap: 12px;
@media (max-width: 1180px){
    width: 100%;
    height: auto;
    padding: 6px 12px;
}
`

export const Circle = styled.div
    `border-radius: 50%;
flex-shrink: 0;
stroke-width: 1px;
display: flex;
align-items: center;
gap: 24px;
// @media (max-width: 850px){
//     display:none;
// }
`

export const MidCircle = styled(Circle)
`height: 48px;
width: 48px;
background-color: #FAFAFA;
border: 1px solid #D8D8D8;
margin-left: 5%;
margin-right: 5%;
@media (max-width: 1180px){
    height: 35px;
    width: 35px;
}
`

export const Bell = styled.img
`padding: 12px;
@media (max-width: 1180px){
    padding: 5.75px;
    // width: 10px;
    // height: 10px;
}
`

export const SmallCircle = styled(Circle)
    `width: 12px;
height: 12px;
position: absolute;
background-color: #F38600;
stroke: white;
@media (max-width: 1180px){
    width: 6px;
    height: 6px;
}`


export const Profile = styled.div
    `display: flex;
align-items: center;
position: relative;
align-self: right;
gap: 12px;
margin-right: 0%;
cursor: pointer;
// &:hover{
//     .arrow{
//         transform:rotate(180deg);
//     }
// }
`

export const DP = styled.img
`@media (max-width:1180px){
    height: 35px;
}`

export const TextName = styled.span
`color: var(--Fonts-Primary-Font, #1A1A1A);
font-size: 14px;
font-weight: 600;
text-align: center;
@media (max-width: 1180px){
    font-size:12px;
}
`

export const TextProf = styled.span
`color: var(--Fonts-Secondary-Font, #4C4C4C);
font-size: 12px;
font-weight: 500;
@media (max-width: 1180px){
    font-size:10px;
}`

export const Icons = styled.img
    `margin-left: 5%;
margin-right: 5%;
cursor:pointer;
@media (max-width: 1180px){
    height: 35px;
    width: 35px;
}`

export const Drop = styled.div
`type:none;
width: 100%;
background-color: white;
position: absolute;
border: 1px solid #D8D8D8;
border-radius: 10%;
box-shadow: grey;
// padding-top: 100%;
top: 100%;
`

export const Direct = styled(Link)
`text-decoration:none;
width:100%;
color: var(--Fonts-Primary-Font, #1A1A1A);
&:hover{
    color: orange;
}
`

export const Items = styled.ul
`
cursor: pointer;
font-size: 14px;
border-radius: 10%;
padding: 5%;
@media (max-width: 1180px){
    font-size: 12px;
}
&:hover{
    color: orange;
}
`

export const RotateImg = styled.img
`&:hover{
transform: rotate(180deg);
}`