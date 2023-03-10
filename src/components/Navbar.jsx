import "./Navbar.css"
const Navbar = () => {
    return (
        <header className="header">
        <nav className="nav__container">
            <h2 className="nav__logo">Logo</h2>
            <ul className="nav__navbar" id="nav__navbar">
                <div className="nav__items">
                    <li className="nav__item"><a href="index.html" className="nav__link">link</a></li>
                    <li className="nav__item"><a href="index.html" className="nav__link">link</a></li>
                    <li className="nav__item"><a href="index.html" className="nav__link">link</a></li>
                    <li className="nav__item"><a href="index.html" className="nav__link">link</a></li>
                </div>
            </ul>
            <div className="nav__icons" id="nav__icons">
                <div className="nav__close nav__icon" id="nav__close"><i className='bx bx-x'></i></div>
                <div onClick={(e)=> {e.target.parentElement.parentElement.parentElement.children[1].classList.toggle("menu__visivility")}} className="nav__menu nav__icon" id="nav__menu"><i className='bx bx-menu-alt-right'></i></div>
            </div>
        </nav>
        </header>
    )
}
export default Navbar;