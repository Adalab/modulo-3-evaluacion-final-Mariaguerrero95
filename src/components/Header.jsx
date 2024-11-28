import Image from "/images/Rick and Morty image.png";
import "../scss/components/Header.scss";

function Header() {
    return (
        <header>
            <img className="image" src={Image} alt= "Title of the serie Rick and Morty" />
        </header>
    )
}

export default Header;