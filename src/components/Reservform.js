import React, {Component} from 'react';

class Reservform extends Component{
    constructor () {
        super();
        this.state = {
          title: '',
          name: '',
          numberppl: '',
          task: 'Reservacion'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        this.props.onAddReser(this.state);
        this.setState({
          title: '',
          name: '',
          numberppl: '',
          task: 'Reservacion'
        });
      }
    
      handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
      }
    
      render() {
        return (
          <div className="card">
            <form onSubmit={this.handleSubmit} className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  placeholder="Titulo"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.state.responsible}
                  onChange={this.handleInputChange}
                  placeholder="Nombre"
                  />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="numberppl"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  placeholder="Numero de Personas"
                  />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  placeholder="Telefono / Contacto"
                  />
              </div>
              <div className="form-group">
                <select
                    name="task"
                    className="form-control"
                    value={this.state.priority}
                    onChange={this.handleInputChange}
                  >
                  <option>Reservacion</option>
                  <option>Evento</option>
                  <option>Reservacion con Pedido</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Asignar
              </button>
            </form>
          </div>
        )
      }
    
}

export default Reservform;