import React from "react";
import StyleCSS from '../style/StyleCSS.module.css';

const Header = (title) => {
    return (
        <div>
            <h2 className={StyleCSS.header}>{ title.title }</h2>
        </div>
    )
}

export default Header;