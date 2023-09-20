/*using footer stub to let the code run*/
import './Footer.css';
import FooterNav from './FooterNav';
import './Footer.css';


function Footer({onNav}){
    return(
        <footer className="footer">
            {/* <ul className="footer__social footer__list">
                <li className="footer__item">
                    <a className="footer__link" href="/about.html">Privacy</a>
                </li>
            </ul>
            <ul className="footer__company footer__list">
                <li className="footer__item">
                    <a className="footer__link" href="/about.html">Festival Announcements</a>
                </li>
            </ul>
            <ul className="footer__legal footer__list">
                <li className="footer__item">
                    <a className="footer__link" href="/about.html">Website Updates</a>
                </li>   
            </ul> */}

        <FooterNav className="footer__nav" onNav={onNav}/>
        </footer>
    );
}

export default Footer;