import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default function Navbar(){
    return(<>
    <nav>
    <Ul>
        <Li><Link to={"/"}>홈</Link></Li>
        <Li><Link to="/login">로그인</Link></Li>
        <Li><Link to="/calc">계산기</Link></Li>
        <Li><Link to="/bmi">BMI계산기</Link></Li>
        <Li><Link to="/counter">숫자 카운터</Link></Li>
        <Li><Link to="/circlearea">원넓이계산기</Link></Li>
        <Li><Link to="/grade">성적표</Link></Li>
    </Ul>
    </nav>
    </>)
}





const Ul =styled.ul`
background-color: #FFDAB9;
text-decoration: none;
text-align: center;
`

const Li =styled.li`
float: left;
margin-left: 1em;
font-size: 20px;
text-align: center;
display: inline-block
`