import React, { Component } from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import axios from 'axios'
import './weatherpage.css'
class WeatherPage extends Component {

    state = {
        temp: '',
        city: '',
        country: '',
        min_temp: '19.99',
        max_temp: '22.00',
        description: '',
        icon: '',
        background_image_url: ''
    }


    componentDidMount() {

        let a = this.props.location.state.city
        let b = this.props.location.state.country
        
        this.setState({
            city: a,
            country: b
        })

        let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + a + ',' + b + '&appid=6929c3b4264ea1604de4af004d2a2db1'

        axios.get(url)
            .then(response => {
                let ctemp = response.data.main.temp - 273.15
                let mint = response.data.main.temp_min - 273.15
                let maxt = response.data.main.temp_max - 273.15
                let des = response.data.weather[0].description
                let ico = response.data.weather[0].icon
                console.log(response.data);
                this.setState({ 
                    temp: ctemp.toFixed(2),
                    min_temp: mint.toFixed(2),
                    max_temp: maxt.toFixed(2),
                    description: des,
                    icon: ico
                 })
            })
    }

    render() {

        let icon_url = "http://openweathermap.org/img/wn/" + this.state.icon + "@2x.png"

        return (
            <div className="body">
                <h1>{this.state.city}</h1>
                <h2>{this.state.description}</h2>
                <img src={icon_url}  className="icon"/>
                <CardDeck className="Deck">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                {this.state.temp}°C
                             </Card.Text>
                             <h4>Current Temprature</h4>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                {this.state.max_temp}°C
                            </Card.Text>
                            <h4>Maximum Temprature</h4>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                {this.state.min_temp}°C
                             </Card.Text>
                             <h4>Minimum Temprature</h4>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default WeatherPage;