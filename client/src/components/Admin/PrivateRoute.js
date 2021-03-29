import {Redirect, Route} from 'react-router-dom'

const PrivateRoute = ({isAdmin, component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render= {(props) => 
                isAdmin ? (
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
