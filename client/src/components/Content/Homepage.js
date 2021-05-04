import { useDispatch, useSelector } from 'react-redux'
import { getAllContent } from '../../actions/contentActions';
import { useEffect, useState, Fragment } from 'react'
import Load from './Load';
import NavBar from '../NavBar';
import image from './escolariologo.png'
import { Link } from 'react-router-dom';


const Homepage = () => {

    const dispatch = useDispatch()
    const content = useSelector(state => state.content.contentList)
    const loading = useSelector(state => state.content.loading)

    const [headline, setHeadline] = useState(content)

    useEffect(() => {
        dispatch(getAllContent());
    }, [])

    useEffect(() => {
        setHeadline(content.slice(content.length - 6, content.length).reverse())
    }, [content])

    return (

        <Fragment>
            <NavBar />
            {
                (headline && !loading) ?
                    <div className="container grid-ish my-5">
                        <div className="border border-info">
                            {headline[0] ?

                                <div className="p-sm-4">
                                    <div>
                                        <img src={headline[0].selectedFile || image} className="rounded img-fluid border-0" />

                                        <Link to={`post/${headline[0]._id}`}>
                                            <p className="article-link">
                                                {headline[0].title}
                                            </p>
                                        </Link>
                                    </div> </div> : ''
                            }

                        </div>
                        <div className=" try">
                            <div className="border border-info ">
                                {headline[1] ?
                                    <div className="p-sm-4">
                                        <div className="">
                                            <img src={headline[1].selectedFile || image} className="img-fluid border-0" />
                                            <Link to={`post/${headline[1]._id}`}>
                                                <p className="article-link">
                                                    {headline[1].title}
                                                </p>
                                            </Link>
                                        </div></div> : ''
                                }
                            </div>
                            <div className="border border-info ">
                                {headline[2] ?
                                    <div className="p-sm-4">
                                        <div className="">
                                            <img src={headline[2].selectedFile || image} className="rounded img-fluid border-0" />
                                            <Link to={`post/${headline[2]._id}`}>
                                                <p className="article-link">
                                                    {headline[2].title}
                                                </p>
                                            </Link>
                                        </div></div> : ''
                                }
                            </div>
                            <div className="border border-info ">
                                {headline[3] ?
                                    <div className="p-sm-4">
                                        <div className="">
                                            <img src={headline[3].selectedFile || image} className="rounded img-fluid border-0" />
                                            <Link to={`post/${headline[3]._id}`}>
                                                <p className="article-link">
                                                    {headline[3].title}
                                                </p>
                                            </Link>
                                        </div></div> : ''
                                }
                            </div>
                            <div className="border border-info ">
                                {headline[4] ?
                                    <div className="p-sm-4">
                                        <div className="">
                                            <img src={headline[4].selectedFile || image} className="rounded img-fluid border-0" />
                                            <Link to={`post/${headline[4]._id}`}>
                                                <p className="article-link">
                                                    {headline[4].title}
                                                </p>
                                            </Link>
                                        </div></div> : ''
                                }
                            </div>
                            <div className="border border-info ">
                                {headline[5] ?
                                    <div className="p-sm-4">
                                        <div className="">
                                            <img src={headline[5].selectedFile || image} className="rounded img-fluid border-0" />
                                            <Link to={`post/${headline[5]._id}`}>
                                                <p className="article-link">
                                                    {headline[5].title}
                                                </p>
                                            </Link>
                                        </div></div> : ''
                                }
                            </div>
                        </div>

                        {/* <div className="col-sm-4  mx-auto border border-info rounded text-center ">
                            {headline[0] ?

                                <div className="p-sm-4">
                                    <div>
                                        <img src={image} className="rounded img-fluid border-0" />
                                        {headline[0].title}
                                    </div> </div> : ''
                            }
                        </div>
                        <div className="col-sm-8  mx-auto">
                            <div className="row ">
                                <div className="col-sm-4 border border-info rounded text-center">
                                    {headline[1] ?
                                        <div className="p-sm-4">
                                            <div className="">
                                                <img src={image} className="rounded img-fluid border-0" />
                                                {headline[1].title}
                                            </div></div> : ''
                                    }
                                </div>
                                <div className="col-sm-4 border border-info rounded text-center">
                                    {headline[2] ?
                                        <div className=" ">
                                            <img src={image} className="rounded img-fluid border-0 " />
                                            {headline[2].title}
                                        </div> : ''
                                    }
                                </div>
                                <div className="col-sm-4 border border-info rounded text-center">
                                    {headline[3] ?
                                        <div className=" ">
                                            <img src={image} className="rounded img-fluid border-0" />
                                            {headline[3].title}
                                        </div> : ''
                                    }
                                </div>
                            </div>
                            <div className="row  ">
                                <div className="col-sm-6 border border-info rounded text-center">
                                    {headline[4] ?
                                        <div className=" ">
                                            <img src={image} className="rounded img-fluid border-0" />
                                            {headline[4].title}
                                        </div> : ''
                                    }
                                </div>
                                <div className="col-sm-6 border border-info rounded text-center">
                                    {headline[5] ?
                                        <div className=" ">
                                            <img src={image} className="rounded img-fluid border-0" />
                                            {headline[5].title}
                                        </div> : ''
                                    }
                                </div>
                            </div>
                        </div> */}
                    </div>
                    : <Load />
            }

        </Fragment>
    )
}

export default Homepage
