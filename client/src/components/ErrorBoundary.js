import { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        if (error) {
            this.setState({ hasError: true })
            console.log(error)
            console.log(info)
        }

    }

    render() {
        if (this.state.hasError === true) {
            return (
                <div className="container">
                    <h1 className="title-page">Oops! something went wrong!</h1>
                    <div className="text-center">
                        <a href="/" className="li">Go back</a>
                    </div>
                </div>
            )
        }
        else {
            return this.props.children
        }
    }

}

export default ErrorBoundary
