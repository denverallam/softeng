// import './styles.css'
import { useSelector } from 'react-redux'

const Footer = () => {

    const loading = useSelector(state => state.content.loading)

    return (
        <div>
            {
                loading ? <></> :
                    <footer class="footer mt-5 py-3 footer-bg sticky-bottom">
                        <div class="container">
                            <img src='' />
                        </div>
                    </footer>
            }
        </div>
    )
}

export default Footer
