import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import './input.css'
import { Redirect, Link } from 'react-router-dom';

class Input extends Component {

    state = {
        city: '',
        country: ''
    }

    render() {

        const countryHandler = (event) => {
            this.setState({ country: event.target.value })

        }

        const cityHandler = (event) => {
            this.setState({ city: event.target.value })

        }

        return (
            <div className="background Form">
                <h1 className="header">Weather Forcast</h1>
                <input type="text" className="input" placeholder="Enter State" onChange={cityHandler} />
                <input type="text" className="input" placeholder="Enter Country" onChange={countryHandler} />
                <Link to={{
                    pathname: "/weatherpage",
                    state: {
                        city: this.state.city,
                        country: this.state.country
                    }
                }} >
                    <Button className="Button">Submit</Button>
                </Link>
            </div>
        )

    }
}

export default Input;