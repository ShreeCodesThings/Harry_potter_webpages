import menu from './menu';
import './gg-menu.css'
import './GlobalNav.css'
import { useState } from 'react';

console.log(menu);


function GlobalNav({className, onNav}){

    const list = menu.map( item => { 
        return (
            <li className="global-nav__item" key={item.name}>
                <a onClick={ onNav } className="global-nav__link" href="{item.path}" data-target={item.name}>
                {item.name}
                </a>
            </li>
        );
    });

    const [showMenu, setShowMenu] = useState(false);

    const menuIcon = showMenu ? 'gg-close' : 'gg-menu';

    const menuClass = showMenu ? 'global-nav__list--open' : 'global-nav__list--closed'



    return(
        <nav className={`global-nav ${className}`}>
            <button className='global-nav__toggle'
            onClick={() => setShowMenu(!showMenu)}
            aria-label={showMenu ? "Close Menu" : "Open Menu"}>
            <span className={menuIcon}/>
            </button>
                <ul className={`global-nav__list ${menuClass}`}>
                { list }
                </ul>
            
        </nav>
    );
}

export default GlobalNav;