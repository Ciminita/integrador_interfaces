import React, { Component } from 'react';

import Form from './componentes/Form';
import Info from './componentes/Info';


class App extends Component {

    state = {
        temperature: '',
        humidity: '',
        wind_speed: 0,
        city: '',
        country: '',
        error: null
    };

    getClima = async (e) => {
        e.preventDefault();
        const { city, country } = e.target.elements;
        const validarCiudad = city.value;
        const validarPais = country.value;

        if (validarCiudad && validarPais) {
            
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${validarCiudad},${validarPais}&appid=5340c297e823fd5625fbf7d3b29ed331&units=metric`;
            const respuesta = await fetch(API_URL);
            const data = await respuesta.json();
            console.log(data)

            this.setState({
                temperature: data.main.temp,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            });
        } else {
            this.setState({
                error: 'Debe ingresar todos los campos.'
            });
        }

    }

    render() {
        return <div className="container p-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <Form
                        getClima={this.getClima}
                    />
                    <Info {...this.state} />
                </div>
            </div>
        </div>
    }
}

export default App;