import React from 'react';

const Formulario = props => (
    <div className="card card-body">
        <form onSubmit={props.getClima}>
            <div className="form-group">
                <input 
                type="text" 
                name="city" 
                placeholder="Ingrese la ciudad" 
                className="form-control" autoFocus/>
            </div>
            <div className="form-group">
                <input 
                type="text" 
                name="country" 
                placeholder="Ingrese el pais" 
                className="form-control" />
            </div>
            <button className="btn btn-outline-info">
                Obtener Clima
            </button>
        </form>
    </div>
);

export default Formulario;