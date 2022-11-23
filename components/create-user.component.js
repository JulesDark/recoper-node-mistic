import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";


export default class CreateUser extends Component{
    constructor(props){
        super(props);

        this.onChangeUserF_name = this.onChangeUserF_name.bind(this);
        this.onChangeUserS_name = this.onChangeUserS_name.bind(this);
        this.onChangeUserF_lastname = this.onChangeUserF_lastname.bind(this);
        this.onChangeUserS_lastname = this.onChangeUserS_lastname.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUseruser= this.onChangeUseruser.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            f_name: "",
            s_name: "",
            f_lastname: "",
            s_lastname: "",
            email: "",
            user: "",
            password: "",
        };
    }

        onChangeUserF_name(e){
            this.setState({f_name: e.target.value});
        }

            onChangeUserS_name(e){
            this.setState({s_name: e.target.value});
        }

        onChangeUserF_lastname(e){
            this.setState({f_lastname: e.target.value});
        }

        onChangeUserS_lastname(e){
            this.setState({s_lastname: e.target.value});
        }

        onChangeUserEmail(e){
            this.setState = ({email: e.target.value})
        }

        onChangeUseruser(e){
            this.setState = ({user: e.target.value})
        }

        onChangeUserPassword(e){
            this.setState = (this.setState)
        }

    onSubmit(e){
        e.preventDefault();

        const userObject = {
            f_name: this.state.f_name,
            s_name: this.state.s_name,
            f_lastname: this.state.f_lastname,
            s_lastname: this.state.s_lastname,
            email: this.state.email,
            user: this.state.user,
            password: this.state.password,
        };

        axios
            .post("http://localhost:4000/user/create", userObject)
            .then((res) => console.log(res.data));
        this.setState({ f_name: "", s_name: "",f_lastname:"",s_lastname:"", email: "", user: "", password: "",});
    }

    render(){
        return (    
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="f_name">
                        <Form.Label>Primer Nombre</Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.f_name}
                            onChange={this.onChangeUserF_name}
                        />
                    </Form.Group>

                    <Form.Group controlId="s_name">
                        <Form.Label>Segundo Nombre</Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.s_name}
                            onChange={this.onChangeUserS_name}
                        />
                    </Form.Group>

                    <Form.Group controlId="f_lastname">
                        <Form.Label>Primer Apellido</Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.f_lastname}
                            onChange={this.onChangeUserF_lastname}
                        />
                    </Form.Group>

                    <Form.Group controlId="s_lastname">
                        <Form.Label>Segundo Apellido</Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.s_lastname}
                            onChange={this.onChangeUserS_lastname}
                        />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control 
                            type="email"
                            value={this.state.email}
                            onChange={this.onChangeUserEmail}
                        />
                    </Form.Group>

                    <Form.Group controlId="User">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.user}
                            onChange={this.onChangeUseruser}
                        />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                            type="text"
                            value={this.state.user}
                            onChange={this.onChangeUserPassword}
                        />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
                        Crear Usuario
                    </Button>
                </Form>
            </div>
        );
    }
}

