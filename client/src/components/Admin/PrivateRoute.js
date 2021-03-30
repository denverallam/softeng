import {Redirect, Route} from 'react-router-dom'

const PrivateRoute = ({user, isAdmin, component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render= {(props) => 
                user && isAdmin ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: {from : props.location}
                    }}/>
                )
            }
        />
    );
};

export default PrivateRoute
