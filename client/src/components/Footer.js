import footer from './footer.png'
import { Link } from 'react-router-dom'


const Footer = () => {


    return (
        // <a href="#">
        //     <img src={footer} className="img-fluid sticky-lg-top" />
        // </a>
        <>
            <div className="container-fluid" style={{  backgroundImage: `url(${footer})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'bottom', height:'15vh'}}>
            </div>
        </>
    )
}

export default Footer
