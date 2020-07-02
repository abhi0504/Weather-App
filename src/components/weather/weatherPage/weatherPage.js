import React , {Component} from 'react'
import axios from 'axios'
class WeatherPage extends Component {

    state = {
        temp : '',
        city : '',
        country: ''
    }

    componentDidMount() {

        let a = this.props.location.state.city
        let b = this.props.location.state.country

        this.setState({
            city : a,
            country : b 
        })

        let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + a + ',' + b + '&appid=6929c3b4264ea1604de4af004d2a2db1'        

        axios.get(url)
        .then(response => {
            console.log(response.data.main.temp);
            let a = response.data.main.temp - 273.15
            this.setState({ temp : a.toFixed(2)})
        })
    }

    render () {

        return (
            <div>
                Temp of {this.state.city} , {this.state.country}  is {this.state.temp}
            </div>
        )
    }
}

export default WeatherPage;