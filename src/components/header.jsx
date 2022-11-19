import React from 'react';
import '../App.css'

function Header(props) {
    return (
        <>
        <header>
        <h1>Logo</h1>
        <nav >
            <a onClick={props.clickT}  href="#">Trend</a>
            <a onClick={props.clickG} href="#">General</a>
            <a onClick={props.clickS} href="#">Sport</a>
            <a onClick={props.clickE} href="#">Entertainment</a>
            <a onClick={props.clickB} href="#">Business</a>

        </nav>
        </header>
        </>
     );
}

export default Header;