
import { useSelector } from 'react-redux'
import logo from './escolariologo.png'


const Footer = () => {

    const loading = useSelector(state => state.content.loading)

    return (
        <div className="container-fluid p-0 fh">
            {
                loading ? <></> :
                    <footer class="footer mt-5 py-3 footer-bg p-5">
                        <div class="container">
                            <img src={logo} className="fi"/>
                        </div>
                    </footer>
            }
        </div>
    )
}

export default Footer
