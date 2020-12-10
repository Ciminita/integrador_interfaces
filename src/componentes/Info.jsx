import React from 'react';


const Informacion = props => {

        console.log(props)
        return (
            <div>
                {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperature ?
                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.city && props.country &&
                        <p> Ubicación: {props.city}, {props.country}</p>
                    }
                    {
                        props.temperature &&
                        <p> Temperatura: {props.temperature} ℃</p>
                    }
                    {
                        props.humidity &&
                        <p> Humedad: {props.humidity}</p>
                    }
                    {
                        props.wind_speed &&
                        <p> Vientos: {props.wind_speed}</p>
                    }
                </div>
                :
                <div className="card card-body mt-2 text-center">
                    <i className="fas fa-sun fa-10x"></i>
                </div>
            }
            </div>
    
        )

}

export default Informacion;