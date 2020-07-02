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
            <div className="Form">
                <input type="text" name="name" placeholder="city" onChange={cityHandler} />
                <input type="text" name="name" placeholder="country" onChange={countryHandler} />
                <Link to={{
                    pathname: "/weatherpage",
                    state: {
                        city: this.state.city,
                        country: this.state.country
                    }
                }} >
                    <Button>Submit</Button>
                </Link>
            </div>
        )

    }
}

export default Input;