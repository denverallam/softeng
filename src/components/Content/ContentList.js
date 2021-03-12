import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from './Content';
import { ListGroup, ListGroupItem } from 'reactstrap';
// import ContentForm from './ContentForm';
import { getAllContent } from '../../actions/contentActions';

const ContentList = ({ match }) => {

    // const [content, setContent] = useState([]);
    // const fetchAllData = async (category) => {
    //     const  result = await api.get(`/content/${category}`)
    //     setContent(result.data)
    // }
    // useEffect(() => {
    //     setCategory(path.pathname)
    //     fetchAllData(category);
    // }, [category,content]);
    const [category, setCategory] = useState('');

    const dispatch = useDispatch()
    const content = useSelector(state => state.content.contentList)

    useEffect(() => {

        let unmounted = false

        setCategory(match.params.category)
        if (!unmounted) {
            dispatch(getAllContent(category));
        }

        return () => {
            unmounted = true
        }

    }, [dispatch, category, content])

    return (

        <div>
            {/* {console.log(match)} */}
            {content.length > 0 ?

                <ListGroup>
                    {
                        content.map(content => (
                            <ListGroupItem className="border-0" key={content._id}>
                                <Content content={content} />
                            </ListGroupItem>
                        ))
                    }
                </ListGroup> : <p className="mx-auto">No content posted!</p>
            }

        </div >
    )
}

export default ContentList
