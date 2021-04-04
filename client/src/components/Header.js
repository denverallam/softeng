import header from './header.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Link to="/">
            <img src={header} className="img-fluid sticky-lg-top" />
        </Link>
    )
}

export default Header
