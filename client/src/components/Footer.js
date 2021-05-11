import footer from './footer.png'
import logo from './escolariologo.png'
import bestlogo from './bestlogo.png'
import thrustlogo from './thrust.png'
import { Link } from 'react-router-dom'


const Footer = () => {


  return (
    // <a href="#">
    //     <img src={footer} classNameName="img-fluid sticky-lg-top" />
    // </a>

    <footer className="page-footer font-small pt-sm-4 py-sm-3 row mx-auto my-auto" style={{ backgroundSize: 'cover', backgroundColor: '#020826', backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center center' }}>

      <div className="container col-sm-4 my-auto" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: '50% 33%', minHeight: '10vh', maxHeight: '20vh', maxWidth: '40vw', }}>
      </div>
      <div className="container col-sm-4 my-auto text-center mx-auto">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/ustbecarios">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-tw mx-1" href="https://twitter.com/ustbecarios">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="container col-sm-4 row text-center mx-auto">
        <div className="container col-sm-6 my-auto mx-auto">
          <p className="my-0 footer-text">Room 3h</p>
          <p className="my-0 footer-text">3rd Floor</p>
          <p className="my-0 footer-text">UST Tan Yan Kee</p>
          <p className="my-0 footer-text">Student Center</p>
        </div>
        <div className="container-fluid col-sm-6 row mx-auto my-2">
          <div className="col-sm-4" style={{ backgroundImage: `url(${bestlogo})`, backgroundRepeat: 'no-repeat', backgroundSize: '90%', backgroundPosition: 'center', height: '10vh', width: '10vh', }}>
          </div>
          <div className="col-sm-8" style={{ backgroundImage: `url(${thrustlogo})`, backgroundRepeat: 'no-repeat', backgroundSize: '110%', backgroundPosition: 'center', height: '10vh', width: '20vh' }}>
          </div>
        </div>
      </div>

    </footer>

  )
}

export default Footer
