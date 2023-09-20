import footer_menu from './footer_menu';
// import { useState } from 'react';
import './FooterNav.css';


function FooterNav({className, onNav}){
    /*used for repeating different items in a menu for instance*/
    const list = footer_menu.map( item => { 
        return (
            <li className="footer-nav__item" key={item.name}>
                <a onClick={ onNav } className="footer-nav__link" href="{item.path}" data-target={item.name}>
                {item.name}
                </a>
            </li>
        );
    });

    // const [showFootMenu, setShowFootMenu] = useState(false);

    // const menuClassFoot = showFootMenu ? 'foot-nav__list--open' : 'foot-nav__list--closed';



    return(
        <nav className={`footer-nav ${className}`}>
                {/* <ul className={`foot-nav__list ${menuClassFoot}`}> */}
                <ul className='foot-nav__list'>
                { list }
                </ul>
            
        </nav>
    );
}


export default FooterNav;