import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import NavBar from '../NavBar';
import image from './escolariologo.png'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import LatestNews from './LatestNews';
import moment from 'moment'
import { listSorter } from '../../sort';
import Grid from '@material-ui/core/Grid';

const Homepage = () => {


    const dispatch = useDispatch()
    const headline = useSelector(state => state.content.contentList.filter(cnt => moment(new Date()).toISOString() >= moment(cnt.date).toISOString()))
    listSorter('LATEST', headline)


    return (
        <Container>
            <NavBar />
            {headline ?
                <div className='row'>
                    <div className="col-md-8 my-4 text-center ">
                        <Grid container spacing={1} className="homepage-container">
                            {headline[0] ?
                                <Grid item lg={12} md={12} className=" d-flex " style={headline[0].selectedFile ? { backgroundImage: `url(${headline[0].selectedFile})`, backgroundSize: 'cover', backgroundPosition: 'center center' ,  } :
                                    { backgroundColor: '#002e5d', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: '75%', backgroundPosition: 'top',   }}>
                                    <div className="align-self-end mx-auto">
                                        <Link to={`post/${headline[0]._id}`} className="">
                                            <p className="homepage-link">
                                                {headline[0].title}
                                            </p>
                                        </Link>
                                    </div>
                                </Grid> : ''
                            }

                            {
                                headline[1] ?
                                    <Grid item lg={4} md={12} className="d-flex" style={headline[1].selectedFile ? { backgroundImage: `url(${headline[1].selectedFile})`, backgroundSize: 'cover', backgroundPosition: 'center center',   } :
                                        { backgroundColor: '#002e5d', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: '75%', backgroundPosition: 'top',   }
                                    } >
                                        <div className="align-self-end mx-auto">
                                            <Link to={`post/${headline[1]._id}`}>
                                                <p className="homepage-link">
                                                    {headline[1].title}
                                                </p>
                                            </Link>
                                        </div>
                                    </Grid> : ''
                            }
                            {headline[2] ?
                                <Grid item lg={4} md={12} className=" d-flex" style={headline[2].selectedFile ? { backgroundImage: `url(${headline[2].selectedFile})`, backgroundSize: 'cover', backgroundPosition: 'center center'   } :
                                    { backgroundColor: '#002e5d', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: '75%', backgroundPosition: 'top',   }}>

                                    <div className="align-self-end mx-auto">
                                        <div>
                                            <Link to={`post/${headline[2]._id}`}>
                                                <p className="homepage-link">
                                                    {headline[2].title}
                                                </p>
                                            </Link>
                                        </div> </div>
                                </Grid> : ''
                            }
                            {headline[3] ?
                                <Grid item lg={4} md={12} className=" d-flex" style={headline[3].selectedFile ? { backgroundImage: `url(${headline[3].selectedFile})`, backgroundSize: 'cover', backgroundPosition: 'center center'  } :
                                    { backgroundColor: '#002e5d', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: '75%', backgroundPosition: 'top',   }}>
                                    <div className="align-self-end mx-auto">
                                        <Link to={`post/${headline[3]._id}`}>
                                            <p className="homepage-link">
                                                {headline[3].title}
                                            </p>
                                        </Link>
                                    </div>
                                </Grid> : ''
                            }
                            {headline[4] ?
                                <Grid item lg={6} md={12} className="d-flex" style={headline[4].selectedFile ? { backgroundImage: `url(${headline[4].selectedFile})`, backgroundSize: 'cover', backgroundPosition: 'center center' ,  } :
                                    { backgroundColor: '#002e5d', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: '75%', backgroundPosition: 'top',   }}>
                                    <div className="align-self-end mx-auto">

                                        <Link to={`post/${headline[4]._id}`}>
                                            <p className="homepage-link">
                                                {headline[4].title}
                                            </p>
                                        </Link>
                                    </div>
                                </Grid>
                                : ''
                            }
                            {headline[5] ?
                                <Grid item lg={6} md={12} className="d-flex" style={headline[5].selectedFile ? { backgroundImage: `url(${headline[5].selectedFile})`, backgroundSize: 'cover', backgroundPosition: 'center center' ,  } :
                                    { backgroundColor: '#002e5d', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: '75%', backgroundPosition: 'top',   }}>
                                        <div className="align-self-end mx-auto">
                                            <Link to={`post/${headline[5]._id}`}>
                                                <p className="homepage-link">
                                                    {headline[5].title}
                                                </p>
                                            </Link>
                                        </div>
                                </Grid>
                                : ''
                            }
                        </Grid>
                    </div>
                    <div className="container col-sm-3 d-none d-md-block">
                        <LatestNews count={4}/>
                    </div>
                </div> : ''
            }
        </Container >
    )
}

export default Homepage
