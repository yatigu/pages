import React from 'react';
import Search from '../img/search.png';

import './Menu.css';

const Menu = () => {
    return (
        <div className = "menu-wrapper">
            <fieldlist className = "station-wrapper">
                <legend className = "menu-title">승차권 예매하기</legend>
                <ul className = "menu-ul">
                    <li className = "li-wrapper">
                        <label className = "menu-leg"> 출발역 </label>
                        <input className = "menu-input" type = "text" name = "departure" value = "서울" title = "출발역"/>
                            <a href="#" title = "조회 팝업">
                                <img className = "search-img" src = { Search } alt = "Search"/>
                            </a>
                    </li>
                </ul>
                <ul>
                    <li className = "li-wrapper">
                        <label className = "menu-leg"> 도착역 </label>
                        <input className = "menu-input" type = "text" name = "destination" value = "서울" title = "출발역"/>
                            <a href="#" title = "조회 팝업">
                                <img className = "search-img" src = { Search } alt = "Search"/>
                            </a>
                    </li>
                </ul>
                <ul>
                    <li className = "li-wrapper">
                        <label className = "date-wrapper">출발일 </label>
                            <input className = "menu-input-date" type = "date" name = "date"/>
                    </li>
                </ul>
                <ul>
                    <li className= "li-wrapper">
                        <label className = "time-wrapper">시간</label>
                            <input className = "menu-input-time" type = "time" name = "time"/>
                    </li>
                </ul>
                <div className = "but-wrapper">
                    <input type = 'button' className = "res-but" value = "기차 조회하기"/>
                </div>
            </fieldlist>
        </div>
    )
}

export default Menu;