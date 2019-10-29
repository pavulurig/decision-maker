import React from 'react';

const Header = (props) =>(
        <div className="header">
            <div className="container">
                <h1 className="header__tittle">{props.appNames}</h1>
                <h2 className="header__subtittle">{props.subTittle}</h2>
            </div>
            
        </div>
    );

export default Header;