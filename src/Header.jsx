
import GlobalNav from './GlobalNav';
import './Header.css'

// import ThemeToggler from './ThemeToggler';

// function Header({ onNav, theme, toggleTheme }){
    function Header({ onNav}){
    return(
        <header className="header"> 
            <img src="https://source.unsplash.com/YrcfSDVli3Y/250x150"
                className="header__logo"
                alt="Feline Overlords Logo"
            />
            <h1 className="header__title">
                Welcome to the wizarding world
            </h1>
            <title>Experience the magical World of Harry Potter</title>
            <GlobalNav className="header__nav" onNav={onNav}/>
      </header>
    );
}

export default Header;